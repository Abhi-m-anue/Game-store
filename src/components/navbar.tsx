import React, { FormEvent, useState } from "react";
import { IoMdHome } from "react-icons/io";


// &#128269;
interface Props {
  setSearchValue: (value: string) => void;
  setGenre: (val: number) => void;
}

const Navbar = ({ setSearchValue, setGenre}: Props) => {
  return (
    <div className="Navbar">
      <h1 className="games-title" onClick={()=>{
        setGenre(0);
      }}>Games</h1>
      <form className="searchForm" onKeyDown={(e)=>{e.key === 'Enter' && e.preventDefault()}}>
        <input
          className="Search-bar"
          placeholder="Search for games"
          onChange={(e) => {
            setSearchValue(e.target.value);
            // console.log(e.target.value)
          }}
        ></input>
        <button className="home-btn" onClick={()=>{
          window.location.reload();
        }}><IoMdHome style={{fontSize: "30px"}}/></button>
      </form>
    </div>
  );
};

export default Navbar;
