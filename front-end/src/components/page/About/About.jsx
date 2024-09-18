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
      <VideoPlayer videos={Videos} text={"Flower Treatment"} />
      <VideoPlayer videos={Video} text={"Flower Treatment"} />
      <VideoPlayer videos={Roses} text={"Flower Treatment"} />
      <VideoPlayer videos={Gerberas} text={"Flower Treatment"} />
      <VideoPlayer videos={Flower} text={"Flower Treatment"} />
      <div className="mt-12">
          <Footer/>
        </div>
    </>

  );
};

export default AboutPage;



