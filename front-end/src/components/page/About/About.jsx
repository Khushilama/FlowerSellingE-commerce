import React from "react";
import flower from "../../../assets/Image/flower.webp";
import HeaderContent from "../HeaderContent/HeaderContent";
import Videos from '../../../assets/Video/Baby breath.mp4';
import Video from '../../../assets/Video/Wedding.mp4';
import VideoPlayer from "../../organisms/VideoPlayer/VideoPlayer";
import Footer from "../../molecule/Footer/footer";

const AboutPage = () => {
  return (
    <>
      <HeaderContent />
      <VideoPlayer videos={Videos} text={"Flower Treatment"} />
      <VideoPlayer videos={Video} text={"Flower Treatment"} />
      <div className="mt-12">
          <Footer/>
        </div>
    </>

  );
};

export default AboutPage;



