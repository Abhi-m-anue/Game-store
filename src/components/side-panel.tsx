import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React, { MouseEventHandler, useEffect, useState } from "react";


interface DataProps {
  name: string;
  image_background: string;
  id: number;
}
interface Props {
  setGenre: (val: number) => void;
  showSidePanel : boolean;
}

const SidePanel = ({ setGenre, showSidePanel }: Props) => {
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ["genre"], queryFn: () => {
    return Axios.get(
      "https://api.rawg.io/api/genres?key=9c922c406b014c67b81398655675f3ed&page_size=17"
    ).then((res) => res.data);
  }});
  const[genreSelection,setGenreSelection]=useState(-1);
  

  return (
    <div className={ showSidePanel ? "side-panel visible" : "side-panel"}>
      <div className="box">
        <h1>Genres</h1>
        
        {!isLoading &&
        data.results.map((res: DataProps,i:number) => {
          return (
            <div
              className={genreSelection === i? "genre selected-genre":"genre"}
              onClick={() => {
                setGenre(res.id); 
                setGenreSelection(i);
              }}
            >
              <img src={res.image_background} />
              <div>{res.name}</div>
              </div>
          );
        })}
      </div>
      
      
    </div>
  );
};

export default SidePanel;
