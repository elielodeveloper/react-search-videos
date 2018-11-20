import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const date = new Date(video.snippet.publishedAt)
  return(
    <div className="ui raised card">
      <div className="content">
        <div className="right floated meta">at: {date.toLocaleDateString()}</div>
        <div className="left floated meta">{video.snippet.channelTitle}</div>
      </div>
      <div onClick={ () => onVideoSelect(video)} className="image video-image">
        <img src={video.snippet.thumbnails.medium.url} alt=""/>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
        <i className="comment icon"></i>
        3 comments
      </div>
      <div className="extra content">
        <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
