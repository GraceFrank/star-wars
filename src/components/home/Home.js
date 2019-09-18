import React, { Component } from 'react';
//import axiosQueries from '../../queries/';
import { connect } from 'react-redux';
import { fetch_starships } from '../../redux/actions/starshipActions';

class Home extends Component {
  //async componentDidMount() {
  // fetch('https://swapi.co/api/people/1')
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  // let stars = await axiosQueries.Get('people/')
  // console.log(stars.data);
  //}

  componentDidMount() {
    this.props.fetch_starships();

  }

  render() {
    console.log(this.props.starships);
    return (
      <div className="welcome">
        <h1> Hi! Welcome to Star Wars</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  starships: state.starships.items
});
export default connect(mapStateToProps, { fetch_starships })(Home);