import React from "react";
import flower from "../../../assets/Image/flower.webp";
import HeaderContent from "../HeaderContent/HeaderContent";
import Videos from '../../../assets/Video/video.mp4';
import VideoPlayer from "../../organisms/VideoPlayer/VideoPlayer";

const AboutPage = () => {
  return (
    <>
      <HeaderContent />
      <VideoPlayer videos={Videos} text={"Flower Treatment"} />
      <VideoPlayer videos={Videos} text={"Flower Treatment"} />
    </>
  );
};

export default AboutPage;
