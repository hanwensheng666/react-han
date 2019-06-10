import * as types from 'store/action-types';


export const changeBreadNav = (name) => {
  //给reducer
  return {
      type: types.CHANGE_BREAD_NAV,
      payload: name
  }
}