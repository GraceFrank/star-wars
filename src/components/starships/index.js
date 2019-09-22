import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch_starships } from '../../redux/actions';
import Header from '../headers/StarshipsHeader';
import Footer from '../footer/Footer';
import Starships from './Starships';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetch_starships();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Starships starships={this.props.starships} />
        <Footer />
      </React.Fragment>

    );
  }
}

Index.propTypes = {
  fetch_starships: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  starships: state.starships.items
});
export default connect(mapStateToProps, { fetch_starships })(Index);