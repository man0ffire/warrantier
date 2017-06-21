import {CREATE_WARRANATY, SORT_BY_NAME, DELETE_WARRANTY} from '../actions';
import _ from 'lodash';

export default function(state = [], action) {

  switch (action.type) {
    case CREATE_WARRANATY:
      let a = action.payload;
      let addWarrnaty = {
        'warranty' : a.warranty,
        'serial' : a.serial,
        'start': a.startDate.format('DD MMM YYYY'),
        'until': a.startDate.add(parseInt(action.payload.period), 'M').format('DD MMM YYYY')
      }
      return [addWarrnaty, ...state];

    case SORT_BY_NAME:
      const newState = _.sortBy(action.payload, ['warranty']);
      return newState;
      
    case DELETE_WARRANTY:
      const newState2 = _.reject(state, ['warranty', action.payload]);
      return newState2;
  }

  return state

}
