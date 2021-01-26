import * as types from "../../constants/types";
const intialState = {
  isFetching: false,
  error: false,
  errorMessage: "",
  moviesList: [],
  moviesListBackUp: [],
  text: "",
};
const movieReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_MOVIE_LIST: {
      return {
        ...state,
        moviesList: action.payload,
        moviesListBackUp: action.payload,
      };
    }
    case types.SEARCH_MOVIE: {
      return {
        ...state,
        moviesList: action.payload,
        text: action.text,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
