import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';

import { Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

class Starship extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    const image = assets.starships;
    const modalStarship = this.props.modalStarship;

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
            {modalStarship.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <Image
              width={350}
              height={350}
              src={require(`../../assets/${image[this.props.starshipIndex]}`)} />
          </center>

          <Row className='mt-2 d-flex justify-content-center'>
            <Col lg={4}>
              <h4>Model<FaLongArrowAltRight></FaLongArrowAltRight></h4>
            </Col>
            <Col lg={4}>
              <h4 className='text-danger'>{modalStarship.model}</h4>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>Capacity<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.cargo_capacity}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>Manufacturer <FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.manufacturer}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>cost<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.cost_in_credits}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>length<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.length}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>speed<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.max_atmosphering_speed}%</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>passengers<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.passengers}%</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>consumables<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.consumables}%</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>rating<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.hyperdrive_rating}%</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>MGLT<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.MGLT}%</h5>
            </Col>
          </Row>
          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>class<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalStarship.starship_class}%</h5>
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

Starship.propTypes = {
  show: PropTypes.bool.isRequired,
  starshipIndex: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalStarship: PropTypes.object.isRequired
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Starship);