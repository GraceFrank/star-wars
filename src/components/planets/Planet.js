import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assets } from '../../assets/assets';

import { Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    const image = assets.planets;
    const modalPlanet = this.props.modalPlanet

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalPlanet.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <Image
              width={350}
              height={350}
              src={require(`../../assets/${image[this.props.planetIndex]}`)} />
          </center>

          <Row className='mt-2 d-flex justify-content-center'>
            <Col lg={4}>
              <h4>Climate <FaLongArrowAltRight></FaLongArrowAltRight></h4>
            </Col>
            <Col lg={4}>
              <h4 className='text-danger'>{modalPlanet.climate}</h4>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>Population<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalPlanet.population}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>terrain <FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalPlanet.terrain}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>rotation<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalPlanet.rotation_period}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>orbital<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalPlanet.orbital_period}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>water<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalPlanet.surface_water}%</h5>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Planet);