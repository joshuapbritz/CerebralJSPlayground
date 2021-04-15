import * as actions from "./actions";

export const initialize = actions.initialize;

export const changeName = [actions.createId, actions.changeName];

export const selectCar = [actions.selectCar];

export const addCar = [actions.createId, actions.addCar];
