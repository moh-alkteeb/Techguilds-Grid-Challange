import React, { useState, useEffect } from "react";
import UnsplashImage from "./UnsplashImage";

import { Loader } from "./common/Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function GridPhoto() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);
  // Fetch images to the page when Scroll down "Infinite Scroll"
  const fetchImages = (count = 7) => {
    const apiRoot = "https://api.unsplash.com";
    // Unsplash Key
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    //Get image from Unaplash API and save them in images arry
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImage([...images, ...res.data]);
      });
  };

  return (
    <div>
      <div className="gallery-wrapper container">
        {/* Infinite Scroll */}
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
          className="gallery"
        >
          {images.map((image, index) => (
            <UnsplashImage
              url={image.urls.thumb}
              key={image.id}
              height={image.height}
              width={image.width}
              alt_description={image.alt_description}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default GridPhoto;
