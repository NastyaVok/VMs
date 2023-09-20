import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class TagStore {
  tagStore: string = '';
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      tagStore: observable,
      setTagStore: action,
      getTagStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getTagStore() {
    return this.tagStore;
  }

  setTagStore = (tag: string) => {
    this.tagStore = tag;
  };
}