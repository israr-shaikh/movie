import MoviesJson from "../../constants/movies.json";
import * as types from "../../constants/types";

export const getMovieList = () => {
  return (dispatch) => {
    dispatch({ type: types.GET_MOVIE_LIST, payload: MoviesJson.entries });
  };
};

export const searchMovie = (text) => {
  return (dispatch, getState) => {
    let state = getState();
    let { moviesListBackUp } = state.movie;
    if (text.length > 2) {
      let filteredList = moviesListBackUp.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      dispatch({ type: types.SEARCH_MOVIE, payload: filteredList, text });
    } else {
      dispatch({ type: types.SEARCH_MOVIE, payload: moviesListBackUp, text });
    }
  };
};
