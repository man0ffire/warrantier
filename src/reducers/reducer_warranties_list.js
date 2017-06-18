import {CREATE_WARRANATY} from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case CREATE_WARRANATY:
      return [action.payload, ...state]
  }

  return state

}
