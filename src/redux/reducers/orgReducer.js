import {
  FETCH_USER_ITEMS_START,
  FETCH_USER_ITEMS_SUCCESS,
  FETCH_USER_ITEMS_ERROR,
} from '../actions/getRecipesActions';

const initialState = {
  isLoading: false,
  recipes: [
    {
      id: '',
      title: '',
      source: '',
      ingredients: '',
      instructions: '',
      category: '',
      photo_url: '',
    },
  ],
  error: null,
};

export const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
      };
    case FETCH_USER_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
