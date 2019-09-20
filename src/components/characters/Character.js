import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assets } from '../../assets/assets';

import { Container, Row, Col, Image, InputGroup, FormControl, Modal, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }


  render() {
    const image = assets.characters;
    const modalCharacter = this.props.modalCharacter

    console.log(this.props.modalCharacter)
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
            {modalCharacter.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <Image
              width={350}
              height={350}
              src={require(`../../assets/${image[this.props.charIndex]}`)} />
          </center>

          <Row className='mt-2 d-flex justify-content-center'>
            <Col lg={4}>
              <h4>DOB<FaLongArrowAltRight></FaLongArrowAltRight></h4>
            </Col>
            <Col lg={4}>
              <h4 className='text-danger'>{modalCharacter.birth_year}</h4>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>gender<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalCharacter.gender}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>height<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalCharacter.height}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>hair<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalCharacter.hair_color}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>eye<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalCharacter.eye_color}</h5>
            </Col>
          </Row>

          <Row className='mt-1 d-flex justify-content-center'>
            <Col lg={4}>
              <h5>mass<FaLongArrowAltRight></FaLongArrowAltRight></h5>
            </Col>
            <Col lg={4}>
              <h5 className='text-danger'>{modalCharacter.mass}kg</h5>
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
export default connect(mapStateToProps, {})(Character);