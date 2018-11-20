import React, { Component } from 'react';
import youtube from '../api/youtube';
import './App.css';

import SearchBar from './searchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params: {q: term, type: 'video' }
    });

    this.setState({videos: response.data.items});
    console.log(this.state.videos)
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="video-container">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
    )
  }
}
