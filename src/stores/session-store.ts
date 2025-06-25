import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../model/user';
import { RootStore } from './root-store';
import { asyncStorageService } from '../services/async-storage';
import { AppStorageKey } from '../enums/app-storage-key';
import { Token } from '../model/token';

/**
 * Manages the session state for the application, including the current user and access token.
 *
 * The `SessionStore` is responsible for:
 * - Persisting and loading the user session and access token using an async storage service.
 * - Providing computed properties to check authentication status and retrieve the user ID.
 * - Reacting to changes in user or access token and updating persistent storage accordingly.
 * - Handling user logout and session cleanup.
 *
 * @remarks
 * This store is intended to be used with MobX for state management in a React Native application.
 *
 * @example
 * ```typescript
 * const sessionStore = new SessionStore(rootStore);
 * sessionStore.setUser(user);
 * if (sessionStore.isAuthenticated) {
 *   // User is logged in
 * }
 * await sessionStore.logout();
 * ```
 *
 * @property user - The currently authenticated user, or null if not authenticated.
 * @property token - The access token for the current session, or null if not available.
 * @property rootStore - Reference to the root store for accessing other stores.
 * @method setUser - Sets the current user.
 * @method logout - Logs out the current user and clears session data.
 * @getter isAuthenticated - Returns true if a user is authenticated.
 * @getter userId - Returns the ID of the authenticated user, or null if not authenticated.
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
