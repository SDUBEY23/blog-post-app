import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/actions/blogActions";
import "./Header.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };
  return (
    <div className="header">
      <div className="header__container">
        <h1>Blogs</h1>
      </div>
      <div className="header__search">
        <input
          className="header__input"
          value={inputValue}
          placeholder="Search using title"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="header__btn" onClick={searchHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
