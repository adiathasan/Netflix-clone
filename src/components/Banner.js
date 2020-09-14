import React, { useEffect, useState } from "react";
import "../css/banner.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import movieTrailer from "movie-trailer";

function Banner({ imageURL, setTrailerUrl, trailerUrl }) {
  const [play, setPlay] = useState("play");

  function handlePLay() {
    if (trailerUrl) {
      setTrailerUrl(null);
      setPlay("Play");
    } else {
      movieTrailer(
        imageURL?.title || imageURL?.name || imageURL?.original_name || ""
      )
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get("v"));
          setPlay("Pause");
        })
        .catch((err) => {
          setTrailerUrl("ZWcRmoLqhkc");
          setPlay("Pause");
        });
    }
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
      }}
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${imageURL?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1>{imageURL?.title || imageURL?.name || imageURL?.original_name}</h1>
        <div className="banner__contentBtns">
          <Link
            to="youtube"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <button onClick={handlePLay} className="banner__btn">
              {play}
            </button>
          </Link>
          <button className="banner__btn">My list</button>
        </div>
        <h2 className="banner__description">
          {imageURL?.overview?.split(" ").splice(0, 25).join(" ") + "..."}
        </h2>
      </div>
      <div className="banner--style" />
    </motion.div>
  );
}

export default Banner;
