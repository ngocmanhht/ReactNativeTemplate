import { UserStore } from './user-store';

/**
 * The RootStore class serves as the central store for the application's state management.
 * It acts as a container for all individual stores, such as `UserStore`, and provides a single
 * point of access to them. This enables easy sharing of state and coordination between different
 * parts of the application.
 *
 * @remarks
 * Typically, you would instantiate `RootStore` once at the application's entry point and
 * pass it down to other stores or components as needed.
 *
 * @property {UserStore} userStore - An instance of the UserStore, responsible for managing user-related state.
 *
 * @example
 * ```typescript
 * const rootStore = new RootStore();
 * rootStore.userStore.doSomething();
 * ```
 */
export class RootStore {
  userStore: UserStore;
  constructor() {
    this.userStore = new UserStore(this);
  }
}
export const rootStore = new RootStore();
export type RootStoreType = typeof rootStore;
