const initialState = 0;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'INC_RND':
      return state + payload;
    case 'RESET':
      return 0;

    default:
      return state;
  }
};
