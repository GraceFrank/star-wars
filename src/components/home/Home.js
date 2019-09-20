import React, { Component } from 'react';
import propTypes from 'prop-types';
//import axiosQueries from '../../queries/';
import { connect } from 'react-redux';
import { fetch_starships } from '../../redux/actions/starshipActions';
import Characters from '../characters/Characters';
import Header from '../header/Header';
import Footer from '../footer/Footer';



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

    return (
      <React.Fragment>
        <Header />
        <Characters />
        <Footer />
      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({
  starships: state.starships.items
});
export default connect(mapStateToProps, { fetch_starships })(Home);