import * as types from "./actionTypes";

export function createNews(news) {
  return { type: types.CREATE_NEWS, news };
}
