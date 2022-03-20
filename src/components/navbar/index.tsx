import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.scss";
import Logo from "./sub-components/logo";
import { useAppDispatch } from "../../app/hooks";
import { fetchVideos } from "../../redux/slicers/videosSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const queryFromParam = new URLSearchParams(location.search).get("query");
    const searchQuery = queryFromParam || ""; // because we're gonna make a search request anyways. the empty string just provides the most recent youtube videos.
    setQuery(searchQuery);
    onSearchSubmit(searchQuery);
  }, [location.search]);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    onSearchSubmit(query);
  };
  const onSearchSubmit = (searchQuery: string) => {
    dispatch(fetchVideos(searchQuery));
  };

  const onSearchFieldInput = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <nav>
      <ul className="container">
        <div className="row w-100">
          <li className="left-side">
            <Logo />
          </li>
          <li className="right-side">
            <form
              className="search w-100"
              onSubmit={onFormSubmit}
            >
              <input
                className="search-field"
                placeholder="Search"
                value={query}
                onInput={onSearchFieldInput}
              />
              <div className="search-icon-container">
                <button className="search-btn" type="submit">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="style-scope yt-icon"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      height: "100%",
                      width: "15px",
                    }}
                  >
                    <g className="style-scope yt-icon">
                      <path
                        d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                        className="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </form>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
