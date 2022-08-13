export const  ACTION_SET_AUTH = 'ACTION_SET_AUTH';
export const ACTION_RESET_AUTH = 'ACTION_RESET_AUTH';

/**
 * Set auth
 */
export const setAuth = (data) => ({
  type:ACTION_SET_AUTH,
  payload:data
});

/**
 * Reset auth
 */
 export const setReset = () => ({
    type:ACTION_SET_AUTH,
  });