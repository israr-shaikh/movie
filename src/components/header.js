import "../App.css";
import React from "react";
import { searchMovie } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(searchMovie(event.target.value));
  }

  const movie = useSelector((state) => state.movie);

  const { text } = movie;

  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <div className="search-container">
          <form>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Search.."
              name="search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
