import React, { Component } from 'react';
import HInfo from './components/HInfo';
import Filter from './components/Filter';
import data from './hospital.json';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hospitals: data,
      search: null,
      results: data
    }
  }

  handleSearch = (e) => {
    // console.log(e.target.value);
    let keyword = e.target.value;
    if (!!keyword) {
      keyword = keyword.toLowerCase();
      console.log(keyword);
    }

    const searchFilter = this.state.hospitals.filter((name) => {
      return name.toLowerCase().includes(keyword) === true;
    })
    // console.log(searchFilter);
    this.setState({ hospitals: searchFilter });
  }
  render() {
    return (
      <div className="container">
        <form>
          <input value={this.search} onChange={this.handleSearch} placeholder="...search" />
        </form>
        <div className="components">
          <Filter filtered={this.state.results} />
          <HInfo hospitals={this.state.hospitals} />
        </div>
      </div>
    )
  }
}
