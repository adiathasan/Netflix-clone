import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import "../css/row.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import YouTube from "react-youtube";

const image_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, url, isLarge, setImageURL, isBanner, trailerUrl }) {
  const [movies, setMovies] = useState([]);
  const handleCLick = (movie) => {
    return isBanner ? setImageURL(movie) : null;
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [url]);

  return (
    <Link to="banner" spy={true} smooth={true} offset={-50} duration={1000}>
      <div className="row">
        {isBanner && trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            id="youtube"
            opts={{
              width: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <motion.img
                onClick={() => handleCLick(movie)}
                whileHover={{
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.7,
                }}
                className={`${isLarge ? "row__posterLarge" : "row__poster"}`}
                src={image_base_url + movie.poster_path}
                alt={movie.original_name || movie.original_title}
                key={movie.id}
              />
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default Row;
