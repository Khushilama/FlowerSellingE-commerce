import React from 'react';

const VideoPlayer = ({videos, text}) => {
    return(
        <div className='flex w-2/3 h-[350px] bg-[#DBD8D7] mx-20 shadow-lg rounded-lg overflow-hidden my-20'>
        <div className='flex-1 flex flex-col justify-center'>
          <p></p>
          <p className='text-xl font-medium leading-relaxed text-gray-700 ps-10'>
            {text}
          </p>
        </div>
        <div className='flex-[1] mx-10 my-10'>
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted // Ensure the video is muted if autoplay is used
            className='object-cover h-full'
            controls // This attribute adds the video controls
          >
            <source src={videos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
}

export default VideoPlayer;

