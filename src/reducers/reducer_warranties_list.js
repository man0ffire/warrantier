import {CREATE_WARRANATY, SORT_BY_NAME} from '../actions';
import _ from 'lodash';

export default function(state = [], action) {

  switch (action.type) {
    case CREATE_WARRANATY:
      //console.log(action.payload.startDate.add(parseInt(action.payload.period), 'M'));
      let a = action.payload;
      //let until = a.startDate.add(parseInt(action.payload.period), 'M');
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
  }

  return state

}
