import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class EndpointTypeStore {
  endpointTypeStore: string = '';
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      endpointTypeStore: observable,
      setEndpointTypeStore: action,
      getEndpointTypeStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getEndpointTypeStore() {
    return this.endpointTypeStore;
  }

  setEndpointTypeStore = (type: string) => {
    this.endpointTypeStore = type;
  };
}