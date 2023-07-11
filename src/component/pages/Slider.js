import React, { useEffect, useState } from "react";
import "../css/slider.css";

const Slider = () => {
  const imageUrls = [
    "https://c4.wallpaperflare.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/182/1016/914/movies-007-skyfall-daniel-craig-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const goRight = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imageUrls.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, imageUrls.length]);

  return (
    <div className="slider3-container">
      <div className="left-button">
        <i className="fa-solid fa-chevron-left" onClick={goLeft}></i>
      </div>
      <div>
        <img id="imageposter" src={imageUrls[currentIndex]} alt="" />
      </div>
      <div className="right-button">
        <i className="fa-solid fa-chevron-right" onClick={goRight}></i>
      </div>
    </div>
  );
};

export default Slider;
