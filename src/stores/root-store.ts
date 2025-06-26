import { SessionStore } from './session-store';
import { UIStore } from './ui-store';

/**
 * The RootStore class serves as the central store for the application's state management.
 * It acts as a container for all individual stores, such as `sessionStore`, and provides a single
 * point of access to them. This enables easy sharing of state and coordination between different
 * parts of the application.
 *
 * @remarks
 * Typically, you would instantiate `RootStore` once at the application's entry point and
 * pass it down to other stores or components as needed.
 *
 * @property {sessionStore} sessionStore - An instance of the sessionStore, responsible for managing user-related state.
 *
 * @example
 * ```typescript
 * const rootStore = new RootStore();
 * rootStore.sessionStore.doSomething();
 * ```
 */
export class RootStore {
  sessionStore: SessionStore;
  uiStore: UIStore;
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.uiStore = new UIStore(this);
  }
}
export const rootStore = new RootStore();
export type RootStoreType = typeof rootStore;
