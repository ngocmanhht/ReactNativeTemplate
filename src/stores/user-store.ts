import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { User } from '../model/user';
import { RootStore } from './root-store';
import { asyncStorageService } from '../services/async-storage';
import { AppStorageKey } from '../enums/app-storage-key';

/**
 * Manages the user authentication state and persistence for the application.
 *
 * The `UserStore` class is responsible for:
 * - Storing the current authenticated user.
 * - Persisting user data to AsyncStorage.
 * - Loading user data from AsyncStorage on initialization.
 * - Providing computed properties for authentication status and user ID.
 * - Handling user logout and clearing persisted data.
 *
 * @remarks
 * This store uses MobX for state management and reactions to automatically persist user changes.
 *
 * @example
 * ```typescript
 * const userStore = new UserStore(rootStore);
 * userStore.setUser({ id: '123', name: 'Alice' });
 * console.log(userStore.isAuthenticated); // true
 * await userStore.logout();
 * ```
 */
export class UserStore {
  user: User | null = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this._load();
    reaction(
      () => this.user,
      async user => {
        if (user) {
          await asyncStorageService.setItem(
            AppStorageKey.userStore,
            JSON.stringify(user),
          );
        }
      },
    );
  }

  async _load() {
    const user = await asyncStorageService.getItem<User>(
      AppStorageKey.userStore,
    );
    if (user !== null) {
      runInAction(() => {
        this.user = user;
      });
    }
  }

  setUser(user: User) {
    this.user = user;
  }

  get isAuthenticated(): boolean {
    return this.user !== null;
  }

  async logout() {
    this.user = null;
    await asyncStorageService.removeItem(AppStorageKey.userStore);
  }

  get userId(): string | null {
    return this.user?.id ?? null;
  }
}
