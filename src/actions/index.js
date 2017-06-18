export const CREATE_WARRANATY = 'CREATE_WARRANATY';

export function createWarranty(data, callback) {

  callback();

  return {
    type: CREATE_WARRANATY,
    payload: data
  };
}
