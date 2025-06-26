import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../model/user';
import { RootStore } from './root-store';
import { asyncStorageService } from '../services/async-storage';
import { AppStorageKey } from '../const/app-storage-key';
import { Token } from '../model/token';

/**
 * Manages the user session state, including user information and authentication token.
 *
 * The `SessionStore` is responsible for:
 * - Loading and persisting user and token data from/to async storage.
 * - Providing actions to set user and token.
 * - Exposing computed properties for authentication status and user ID.
 * - Handling user logout and clearing session data.
 *
 * @remarks
 * This store uses MobX for state management and relies on an injected `RootStore` for root-level dependencies.
 *
 * @example
 * ```typescript
 * const sessionStore = new SessionStore(rootStore);
 * sessionStore.setUser(user);
 * sessionStore.setToken(token);
 * if (sessionStore.isAuthenticated) {
 *   // User is logged in
 * }
 * ```
 *
 * @property user - The current authenticated user, or `null` if not authenticated.
 * @property token - The current authentication token, or `null` if not authenticated.
 * @property rootStore - Reference to the root store.
 *
 * @method setUser - Sets the current user and persists it to storage.
 * @method setToken - Sets the current token and persists it to storage.
 * @method logout - Clears the user and token, and removes session data from storage.
 *
 * @getter isAuthenticated - Returns `true` if a user is authenticated, otherwise `false`.
 * @getter userId - Returns the current user's ID, or `null` if not authenticated.
 */
export class SessionStore {
  user: User | null = null;
  token: Token | null = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this._load();
  }

  async _load() {
    const user = await asyncStorageService.getItem<User>(
      AppStorageKey.sessionStore,
    );
    const token = await asyncStorageService.getItem<Token>(AppStorageKey.token);
    if (user !== null) {
      runInAction(() => {
        this.user = user;
      });
    }
    if (token !== null) {
      runInAction(() => {
        this.token = token;
      });
    }
  }

  async setUser(user: User) {
    this.user = user;
    await asyncStorageService.setItem(
      AppStorageKey.sessionStore,
      JSON.stringify(user),
    );
  }
  async setToken(token: Token) {
    this.token = token;
    await asyncStorageService.setItem(
      AppStorageKey.token,
      JSON.stringify(token),
    );
  }

  get isAuthenticated(): boolean {
    return this.user !== null;
  }

  async logout() {
    this.user = null;
    this.token = null;
    await asyncStorageService.removeMultipleItems(Object.values(AppStorageKey));
  }

  get userId(): string | null {
    return this.user?.id ?? null;
  }
}
