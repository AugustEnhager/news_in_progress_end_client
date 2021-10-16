const rootReducer = (state, action) => {
  switch (action.type) {
    case "ERROR_MESSAGE":
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case "SET_ARTICLES_INDEX":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
