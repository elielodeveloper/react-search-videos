import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import './VideoList.css';

const VideoList = ({videos, onVideoSelect}) => {
  // I will have props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
  });
  return <div className="ui cards video-list">{renderedList}</div>
}


export default VideoList;
