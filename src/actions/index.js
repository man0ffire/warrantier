export const CREATE_WARRANATY = 'CREATE_WARRANATY';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const DELETE_WARRANTY = 'DELETE_WARRANTY';

export function createWarranty(data, callback) {

  callback();

  return {
    type: CREATE_WARRANATY,
    payload: data
  };
}

export function handleSortByName(data){
  return {
    type: SORT_BY_NAME,
    payload: data
  }
}

export function handleDelete(data){
  return {
    type: DELETE_WARRANTY,
    payload: data
  }
}
