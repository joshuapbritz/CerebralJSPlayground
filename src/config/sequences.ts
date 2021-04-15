// import { state, props } from "cerebral";
// import { set, when, toggle, unset } from "cerebral/factories";
import { props } from "cerebral";
import * as actions from "./actions";

export const initialize = actions.initialize;

export const changeName = [actions.createId, actions.changeName];
