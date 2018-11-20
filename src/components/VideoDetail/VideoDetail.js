import React from 'react';
import './VideoDetail.css'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div></div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui raised segment video-detail" style={{marginRight: '15px'}}>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;