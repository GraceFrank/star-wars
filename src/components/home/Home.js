import React, { Component } from 'react';
import axiosQueries from '../../queries/';

class Home extends Component {
  async componentDidMount() {
    // fetch('https://swapi.co/api/people/1')
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    let stars = await axiosQueries.Get('people/')
    console.log(stars.data);
  }

  render() {
    return (
      <div className="welcome">
        <h1> Hi! Welcome to Star Wars</h1>
      </div>
    );
  }
}

export default Home;