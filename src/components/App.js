import React, { Component } from 'react'

import SearchBar from './searchBar/SearchBar'

export default class App extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <SearchBar/>
      </div>
    )
  }
}
