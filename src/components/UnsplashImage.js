import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {},
  caption: {},
  buttons: {},
  thumbnails: {},
  progressBar: {},
  translations: {} /* PRO ONLY */,
  icons: {} /* PRO ONLY */,
};
export const UnsplashImage = ({ url, key, height, width, alt_description }) => {
  let classPortait = "";
  if (height > width) {
    classPortait = "portrait";
  }
  return (
    <>
      <div id="modal-btn" className={classPortait}>
        <a href={url} id="modal-btn" className={classPortait}>
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
