import React, { useState, useEffect } from "react";
import UnsplashImage from "./UnsplashImage";

import { Loader } from "./common/Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {
    autoplaySpeed: 3000,
    boxShadow: "none",
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: "linear",
    overlayColor: "rgba(30, 30, 30, 0.9)",
    slideAnimationType: "fade",
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: "linear",
    usingPreact: false,
  },
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "10px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: "40px",
  },
  caption: {
    captionAlignment: "start",
    captionColor: "#FFFFFF",
    captionContainerPadding: "0",
    captionFontFamily: "inherit",
    captionFontSize: "inherit",
    captionFontStyle: "inherit",
    captionFontWeight: "inherit",
    captionTextTransform: "inherit",
    showCaption: true,
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: "center",
    thumbnailsContainerBackgroundColor: "transparent",
    thumbnailsContainerPadding: "0",
    thumbnailsGap: "0 1px",
    thumbnailsIconColor: "#ffffff",
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: "bottom",
    thumbnailsSize: ["100px", "80px"],
  },
  progressBar: {
    backgroundColor: "#f2f2f2",
    fillColor: "#000000",
    height: "3px",
    showProgressBar: true,
  },
  translations: {
    autoplayText: "Play",
    closeText: "Close",
    downloadText: "Download",
    fullscreenText: "Full screen",
    nextText: "Next",
    pauseText: "Pause",
    previousText: "Previous",
    thumbnailsText: "Hide thumbnails",
    zoomOutText: "Zoom Out",
  },
  icons: {
    autoplayIcon: null,
    closeIcon: null,
    downloadIcon: null,
    fullscreenIcon: null,
    nextIcon: null,
    pauseIcon: null,
    previousIcon: null,
    thumbnailsIcon: null,
    zoomOutIcon: null,
  },
};
function GridPhoto() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);
  // Fetch images to the page when Scroll down "Infinite Scroll"
  const fetchImages = (count = 10) => {
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
        >
          <div className="gallery">
            <SRLWrapper options={options}>
              {images.map((image, index) => (
                <UnsplashImage
                  url={image.urls.small}
                  urlLightbox={image.urls.full}
                  key={image.id}
                  height={image.height}
                  width={image.width}
                  alt_description={image.alt_description}
                />
              ))}
            </SRLWrapper>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default GridPhoto;
