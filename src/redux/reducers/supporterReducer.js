const initialState = {
  isFetching: false,
  isAdding: false,
  favRecipes: [],
  isDeleteing: false,
};

export const supporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCHING_SUCCESSFUL':
      return {
        ...state,
        isFetching: false,
        favRecipes: action.payload.favorite_recipes,
      };
    case 'DELETING_DATA':
      return {
        ...state,
        isDeleteing: true,
      };
    case 'DELETING_SUCCESSFUL':
      return {
        ...state,
        isDeleteing: false,
      };
    default:
      return state;
  }
};
