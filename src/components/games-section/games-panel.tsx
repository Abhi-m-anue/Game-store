import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";

interface Props {
  searchValue: string;
}

const GamesPanel = ({ searchValue }: Props) => {
  const { data, isLoading, isError, refetch } = useQuery(["games"], () => {
    return Axios.get(
      `https://api.rawg.io/api/games?key=3c809f59bdbe43b399cb764cb901f09a&search=${searchValue}`
    ).then((res) => res.data);
  });

  const n=20;
 
  useEffect(() => {
    refetch();
  }, [searchValue]);
  return (
    <div className="games-panel">
      {!isLoading &&
        data &&
        data.results.map((game) => {
          return (
            <div className="game-card">
              <img src={game.background_image}></img>
              <div className="game-details">
                <p>{game.name}</p>
              </div>
            </div>
          );
        })}
        {isLoading||isError && [...Array(n)].map((e,i)=><Skeleton key={i}></Skeleton>)}
    </div>
  );
};

export default GamesPanel;
