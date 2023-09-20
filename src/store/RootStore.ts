import { EndpointTypeStore } from './EndpointTypeStore';
import { TagStore } from './TagStore';

export interface IRootStore {
  tagStore: TagStore;
  endpointTypeStore: EndpointTypeStore;
};

export class RootStore implements IRootStore {
  tagStore: TagStore;
  endpointTypeStore: EndpointTypeStore;

  constructor() {
    this.tagStore = new TagStore(this);
    this.endpointTypeStore = new EndpointTypeStore(this);
  }
}
