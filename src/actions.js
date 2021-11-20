export const increment = () => ({
  type: 'INC',
});
export const decrement = () => ({
  type: 'DEC',
});
export const incrementRandom = () => ({
  type: 'INC_RND',
  payload: Math.floor(Math.random() * 10),
});
export const reset = () => ({
  type: 'RESET',
});
