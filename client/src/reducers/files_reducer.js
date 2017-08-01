import _ from 'lodash';

import { FETCH_FILES, UPLOAD_FILE } from '../actionz';

export default function(state = {}, action) {
  switch (action.type){
    case UPLOAD_FILE:
      return { ...state, [ action.payload.data.id]: action.payload.data };
    case FETCH_FILES:
      return _.mapKeys(action.payload.data, 'id'); //soooo useful
    default:
      return state;
  }
}
