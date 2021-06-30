import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const UnsplashImage = ({
  url,
  key,
  height,
  width,
  alt_description,
  urlLightbox,
}) => {
  let classPortait = "";
  if (height > width) {
    classPortait = "portrait";
  }
  return (
    <>
      <div id="modal-btn" className={classPortait}>
        <a href={urlLightbox}>
          <LazyLoadImage
            effect="blur"
            key={key}
            src={url}
            alt={alt_description}
          />
        </a>
      </div>
    </>
  );
};
export default UnsplashImage;
