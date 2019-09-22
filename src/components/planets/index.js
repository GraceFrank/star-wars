import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch_planets } from '../../redux/actions';
import Header from '../headers/PlanetsHeader';
import Footer from '../footer/Footer';
import Planets from '../planets/Planets';

class Index extends Component {
  componentDidMount() {
    this.props.fetch_planets();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Planets planets={this.props.planets} />
        <Footer />
      </React.Fragment>

    );
  }
}

Index.propTypes = {
  fetch_planets: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  planets: state.planets.items,
});
export default connect(mapStateToProps, { fetch_planets })(Index);