import * as types from 'store/action-types';


const initialState = {
  breadNames:['一级','二级']
}

export default function (state=initialState,action) {
  switch(action.type){
    case types.CHANGE_BREAD_NAV:{
      return {
        ...state,
        breadNames:action.payload
      }
    }
    default:{
      return state
    }
  }
}