import { moduleState, props, state } from "cerebral";

export function initialize(...args: any[]) {
  console.log(...args);
}

export function changeName({ store, get }: any) {
  const name = get(props`name`);
  store.set(moduleState`name`, name);
}

export function selectCar({ store, get }: any) {
  const car = get(props`car`);
  store.set(state`selectedCar`, car);
}

export function addCar({ store, get }: any) {
  const id = get(props`id`);
  const vehicle = get(props`car`);
  const compiled = { id, ...vehicle };
  store.push(state`cars`, compiled);
  store.set(state`selectedCar`, compiled);
}

export const createId = ({ ids }: any) => ({ id: ids.create() });
