import api from '../../utils/api';

export const fetchingRecipes = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_RECIPES' });

    api()
      .get(`/api/recipes`)
      .then(res => {
        dispatch({ type: 'FETCHING_RECIPES_SUCCESSFUL', payload: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addToFavourite = (id, campId) => {
  return dispatch => {
    dispatch({ type: 'ADD_TO_FAVOURITE' });

    api()
      .post(`/api/users/${id}/favorites/`, { recipe_id: 1 }) //attach id in the url
      .then(res => {
        dispatch({
          type: 'ADD_TO_FAVOURITE_RECIPE_SUCCESSFUL',
        });
        console.log('ADDING FAV RECIPE:');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
