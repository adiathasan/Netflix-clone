import React, { useEffect, useState } from "react";
import axios from "./config/axios";
import requests from "./config/requests";
import Nav from "./components/Nav";
import Row from "./components/Row";
import Banner from "./components/Banner";
import { motion } from "framer-motion";

function App() {
  const [imageURL, setImageURL] = useState("");
  const [trailerUrl, setTrailerUrl] = useState();
  console.log(trailerUrl);
  useEffect(() => {
    async function BadAssBanner() {
      const poster = await axios.get(requests.fetchNetflixOriginals);
      setImageURL(
        poster.data.results[
          Math.floor(Math.random() * (poster.data.results.length - 1))
        ]
      );
      return poster;
    }
    BadAssBanner();
  }, []);

  return (
    <motion.div
      id="banner"
      layout
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
      }}
      className="App"
    >
      <Nav />
      <Banner
        imageURL={imageURL}
        setTrailerUrl={setTrailerUrl}
        trailerUrl={trailerUrl}
      />
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.fetchNetflixOriginals}
        isLarge
        setImageURL={setImageURL}
        isBanner
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row title="Trending" url={requests.fetchTrending} />
      {/* <Row title='Top Rated' url={requests.topRated}/> */}
      <Row title="Action Movies" url={requests.fetchActionMovies} isLarge />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="HORROR Movies" url={requests.fetchHorrorMovies} isLarge />
      <Row title="Romantic Movies" url={requests.fetchRomanticMovies} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} isLarge />
    </motion.div>
  );
}

export default App;
