import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Index extends Component {

  render() {

    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Index);