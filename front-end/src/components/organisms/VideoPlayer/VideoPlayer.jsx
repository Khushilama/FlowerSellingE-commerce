import React from 'react';

const VideoPlayer = ({ videos, text }) => {
  return (
    <div className="max-w-4xl mx-auto my-20 shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center bg-gray-50 p-8">
          <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
            {text}
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 bg-black">
          <video
            className="w-full h-full object-cover rounded-b-lg lg:rounded-none lg:rounded-r-lg"
            autoPlay
            loop
            muted
            controls
          >
            <source src={videos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
