import React from "react";
import flower from "../../../assets/Image/flower.webp";
import HeaderContent from "../HeaderContent/HeaderContent";
import Videos from '../../../assets/Video/Baby breath.mp4';
import Video from '../../../assets/Video/Wedding.mp4';
import Roses from '../../../assets/Video/Rose.mp4';
import Flower from '../../../assets/Video/Rosee.mp4';
import Gerberas from "../../../assets/Video/Gerberas .mp4";
import VideoPlayer from "../../organisms/VideoPlayer/VideoPlayer";
import Footer from "../../molecule/Footer/footer";


const AboutPage = () => {
  return (
    <>
      <HeaderContent />
      <VideoPlayer videos={Videos} text={"How to take Care of Baby breath flower?"} />
      <VideoPlayer videos={Video} text={"How to take care of tulips?"} />
      <VideoPlayer videos={Roses} text={"How to take care of Rose?"} />
      <VideoPlayer videos={Gerberas} text={"How to take care of Gerberas flower?"} />
      <VideoPlayer videos={Flower} text={"How to take care of bundle of Rose?"} />
      <div className="mt-12">
          <Footer/>
        </div>
    </>

  );
};

export default AboutPage;



