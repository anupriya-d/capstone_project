import React from 'react';
import ReactPlayer from 'react-player';

const VideoBanner = ({ videoUrl, width, height }) => {
    return (
      <div className="video-banner">
        <ReactPlayer
          url={videoUrl}
          width={width}
          height={height}
          controls={true}
          playing={true}
          loop={true}
        />
      </div>
    );
  };
  