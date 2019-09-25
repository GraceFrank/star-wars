import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetch_characters } from '../../redux/actions/';
import Characters from '../characters/Characters';
import Header from '../headers/Header';
import Footer from '../footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetch_characters();

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Characters characters={this.props.characters} />
        <Footer />
      </React.Fragment>

    );
  }
}

Home.propTypes = {
  fetch_characters: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: state.characters.items,
});
export default connect(mapStateToProps, { fetch_characters, })(Home);