import "./App.css";
import { useEffect } from "react";
import { getMovieList } from "./redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "./components/movieItem";
import Header from "./components/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const movie = useSelector((state) => state.movie);

  const { moviesList } = movie;

  console.log(moviesList);

  return (
    <div className="App">
      <Header />
      <div className="movie">
        {moviesList.map((item, index) => (
          <MovieItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
