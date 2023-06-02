import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";

interface Props {
  searchValue: string;
  genre: number;
}

const GamesPanel = ({ searchValue, genre }: Props) => {
  const {
    data: gameData,
    isError,
    refetch,
    isFetching,
  } = useQuery(["games"], () => {
    return Axios.get(
      `https://api.rawg.io/api/games?key=3c809f59bdbe43b399cb764cb901f09a${
        searchValue ? `&search=${searchValue}` : ""
      }${genre != 0 ? `&genres=${genre}` : ""}
      ${sortValue ? `&ordering=${sortValue}` : ""}`
    ).then((res) => res.data);
  });
  const [sortClicked, setSortClicked] = useState(false);
  const [platformsClicked, setPlatformsClicked] = useState(false);
  const [sortValue, setSortValue] = useState("");

  const n = 20;
  console.log(sortValue);
  console.log( `https://api.rawg.io/api/games?key=3c809f59bdbe43b399cb764cb901f09a${
    searchValue ? `&search=${searchValue}` : ""
  }${genre != 0 ? `&genres=${genre}` : ""}
  ${sortValue ? `?ordering=${sortValue}` : ""}`
)

  useEffect(() => {
    refetch();
  }, [searchValue, genre ]);
  return (
    <div className="content">
      <div className="content-top">
        <div className="sort">
          <button
            onClick={() => {
              setSortClicked(!sortClicked);
            }}
          >
            Sort by{" "}
          </button>
          <div className={sortClicked ? "enable" : "sort-list"}>
            <ul>
              <li
                onClick={() => {
                  setSortValue("");
                }}
              >
                Relevance
              </li>
              <li
                onClick={() => {
                  setSortValue("name");
                }}
              >
                Name
              </li>
              <li
                onClick={() => {
                  setSortValue("metacritic");
                }}
              >
                Popularity
              </li>
              <li
                onClick={() => {
                  setSortValue("released");
                }}
              >
                Release date
              </li>
              <li
                onClick={() => {
                  setSortValue("rating");
                }}
              >
                Rating
              </li>
            </ul>
          </div>
        </div>
        <div className="platforms">
          <button
            onClick={() => {
              setPlatformsClicked(!platformsClicked);
            }}
          >
            Platforms
          </button>
          <div className={platformsClicked ? "enable" : "platforms-list"}>
            <ul>
              <li>Relevance</li>
              <li>Name</li>
              <li>Release date</li>
              <li>Rating</li>
              <li>Popularity</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="games-panel">
        {!isFetching &&
          gameData &&
          gameData.results.map((game) => {
            return (
              <div className="game-card">
                <img src={game.background_image}></img>
                <div className="game-details">
                  <h3 style={{ textAlign: "center" }}>{game.name}</h3>
                  <p
                    className={
                      game.metacritic >= 80
                        ? "green"
                        : game.metacritic >= 70
                        ? "yellow"
                        : game.metacritic && "red"
                    }
                  >
                    {game.metacritic && game.metacritic}
                  </p>
                </div>
              </div>
            );
          })}
        {isFetching &&
          [...Array(n)].map((e, i) => <Skeleton key={i}></Skeleton>)}
      </div>
    </div>
  );
};

export default GamesPanel;
