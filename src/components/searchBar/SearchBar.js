import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  onFormSubmit = event =>{
    event.preventDefault();

    //Callback from parent
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui category search fluid">
          <div className="ui icon input" style={{width: '100%'}}>
            <input 
              className="prompt" 
              type="text"
              value={this.state.term}
              onChange={(event) => 
                this.setState({term: event.target.value})}              
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
