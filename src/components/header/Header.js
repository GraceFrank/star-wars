import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

class Header extends Component {

  render() {

    return (
      <React.Fragment>
        <Container fluid className='bg text-light'>
          <Row className='mb-5'>
            <Col className='mt-5'>
              <Image
                width={121}
                height={53}
                className='ml-4 mt-4'
                src={require("../../assets/logo.png")} />
            </Col>
          </Row>

          <Row className='pt-5'>
            <Col>
              <Row className='mt-4 d-flex justify-content-center'>
                <Image
                  className='mr-2'
                  width={121}
                  height={53}
                  src={require("../../assets/logo.png")} />

                <h1 className='ml-2 display-5'>
                  <strong>Directory</strong>
                </h1>
              </Row>
              <Row>
                <div className='bg-light title-underline'></div>
              </Row>
              <Row className='mt-4 mb-4 d-flex justify-content-center'>
                <Col lg={4}>
                  <p className='text-center lead'>
                    <strong>Find Your Favourite Characters, Films, Species, Starships and Planets</strong>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex justify-content-center' >
                  <InputGroup size='lg' className="mb-3 w-50">
                    <InputGroup.Prepend >
                      <div className='bg-light text-center search-icon'><FaSearch size={32}></FaSearch></div>

                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Enter Search Item"
                    />

                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Header);