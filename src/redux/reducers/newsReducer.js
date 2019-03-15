import * as types from "../actions/actionTypes";

export default function newsReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_NEWS:
      return [...state, { ...action.news }];
    default:
      return state;
  }
}
