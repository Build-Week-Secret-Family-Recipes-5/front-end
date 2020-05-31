import api from '../../utils/api';

//FETCHING A CAMPAIGN FOR INDIVIDUAL Organizations

export const FETCH_USER_ITEMS_START = 'FETCH_USER_ITEMS_START';
export const FETCH_USER_ITEMS_SUCCESS = 'FETCH_USER_ITEMS_SUCCESS';
export const FETCH_USER_ITEMS_ERROR = 'FETCH_USER_ITEMS_ERROR';

export const getRecipes = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_ITEMS_START });

    api()
      .get(`/api/getrecipes/${localStorage.getItem('recipe_id')}`)
      .then(res => {
        console.log('coming from actions', res.data);
        dispatch({
          type: FETCH_USER_ITEMS_SUCCESS,
          payload: res.data.map(data => {
            return {
              id: data.id,
              title: data.title,
              source: data.source,
              ingredients: data.ingredients,
              instructions: data.instructions,
              category: data.category,
              photo_url: data.photo_url,
              recipe_id: data.recipe_id,
              org_name: data.recipe_name,
            };
          }),
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_ITEMS_ERROR, payload: err.error });
      });
  };
};
