const reducers = (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        posts: action.payload.data.data,
      };
    case 'CREATE':
      return [...state, action.payload];
    default:
      return state;
  }
};
export default reducers;
