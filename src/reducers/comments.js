import { SAVE_COMMENT } from "actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action) {
 switch (action.type) {
  case SAVE_COMMENT:
    return [...state, action.payload];
  default:
   return state;
 }
}