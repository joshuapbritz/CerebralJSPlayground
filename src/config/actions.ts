import { moduleState, props } from "cerebral";

export function initialize(...args: any[]) {
  console.log(...args);
}

export function changeName({ store, get }: any) {
  const name = get(props`name`);
  store.set(moduleState`value`, name);
}

export const createId = ({ ids }: any) => ({ id: ids.create() });
