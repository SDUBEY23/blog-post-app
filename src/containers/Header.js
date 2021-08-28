import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/actions/blogActions";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };
  return (
    <div className="fixed-header">
      <div className="container">
        <h2>Blogs</h2>
      </div>
      <input
        className="input-field"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Header;
