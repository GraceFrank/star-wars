import React, { Component } from 'react';
import { connect } from 'react-redux';



import { Container } from 'react-bootstrap';

class Footer extends Component {



  render() {

    return (
      <React.Fragment>
        <Container fluid className='footer'>

        </Container>

      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Footer);