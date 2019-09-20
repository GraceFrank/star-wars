import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Planets from '../planets/Planets';

import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

class Index extends Component {

  render() {

    return (
      <React.Fragment>
        <Header />
        <Planets />
        <Footer />
      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Index);