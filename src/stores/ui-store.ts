import { makeAutoObservable } from 'mobx';
import { RootStore } from './root-store';

export class UIStore {
  isLoading: boolean = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  set setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}
