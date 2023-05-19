import React, { useState } from "react";

// &#128269;
interface Props {
  setSearchValue: (value: string) => void;
}

const Navbar = ({ setSearchValue }: Props) => {
  return (
    <div className="Navbar">
      <h1>Games</h1>
      <form>
        <input
          className="Search-bar"
          placeholder="Search for games"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
