import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React, { useEffect, useState } from "react";

interface Props{
  name: string;
  image_background: string
}

const SidePanel = () => {
  const [genreList, setGenreList] = useState(null);
  const { data, isLoading, isError, refetch } = useQuery(["genre"], () => {
    return Axios.get(
      "https://api.rawg.io/api/genres?key=3c809f59bdbe43b399cb764cb901f09a"
    ).then((res) => res.data);
  });

  return (
    <div className="side-panel">
      <h3>Genres</h3>
      {!isLoading &&
        data.results.map((res:Props) => {
          return (
            <div className="genre">
              <img src={res.image_background }/>
              <p>{res.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SidePanel;
