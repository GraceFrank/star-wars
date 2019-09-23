import React, { Component } from 'react';
import axiosQueries from '../../queries/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Planet from './Planet'

import { assets } from '../../assets/assets';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { FaLongArrowAltRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      next: null,
      prev: null,
      count: null,
      pageCount: null,
      listStart: null,
      listEnd: null,
      hidden: true,
      spinner: 'border',
      showModal: false,
      modalPlanet: {},
      planetIndex: 0,
      pagingSpinner: 'none',
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    const planets = props.planets
    this.setState({
      planets: planets.data.results,
      next: planets.data.next,
      prev: planets.data.previous,
      count: planets.data.count,
      listStart: 1,
      listEnd: planets.data.results.length,
      hidden: false,
      spinner: 'none',
    });
  }

  async handlePrev() {
    let { prev, count, listStart, listEnd, planets } = this.state;
    listEnd = listEnd - planets.length;
    if (listStart === 1) {
      return;
    }

    this.setState({
      pagingSpinner: 'border',
    })

    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(prev)
      .then(planets => {
        listStart = listStart - planets.data.results.length;
        this.setState({
          planets: planets.data.results,
          next: planets.data.next,
          prev: planets.data.previous,
          count: planets.data.count,
          pageCount,
          listStart,
          listEnd,
          spinner: 'none',
          pagingSpinner: 'none'

        });
      })
  }

  async handleNext() {
    let { next, count, listStart, listEnd, planets } = this.state;
    listStart = listStart + planets.length
    if (listEnd === count) {
      return;
    }
    this.setState({
      pagingSpinner: 'border',
    })

    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(next)
      .then(planets => {
        listEnd = listEnd + planets.data.results.length;
        this.setState({
          planets: planets.data.results,
          next: planets.data.next,
          prev: planets.data.previous,
          count: planets.data.count,
          pageCount,
          listStart,
          listEnd,
          spinner: 'none',
          pagingSpinner: 'none',
        });
      })
  }

  onShow = (planet, index) => () => {
    this.setState({
      showModal: true,
      modalPlanet: planet,
      charIndex: index
    });
  }

  handleClose = () => () => {
    this.setState({ showModal: false });
  }

  getPlanets() {
    const image = assets.planets;

    return this.state.planets.map((planet, index) => {
      return (
        <Col className='my-4' key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img className='imgee' variant="top" src={require(`../../assets/${image[index]}`)} />
            <Card.Body>
              <Card.Title>{planet.name}</Card.Title>
              <Card.Text>
                Climate: {planet.climate}
                Population: {planet.population}
              </Card.Text>
              <Button onClick={this.onShow(planet, index)} className='card-btn'>
                Read More
                <span className='ml-3'>
                  <FaLongArrowAltRight />
                </span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )
    });
  }

  render() {

    return (
      <React.Fragment>
        <Container className=' py'>
          <Planet show={this.state.showModal} planetIndex={this.state.planetIndex}
            handleClose={this.handleClose()} modalPlanet={this.state.modalPlanet} />

          <Row className="pt-4 mb-5 ">

            <Col>
              <center>
                <Spinner size={100} animation={this.state.spinner} variant="success" />
              </center>
              <Row className='mt-4 d-flex justify-content-center'>
                <h1 className='ml-2 display-6 text-dark-50'>
                  <strong>Starwars Planets</strong>
                </h1>
              </Row>
              <Row>
                <div className='bg-dark title-underline'></div>
              </Row>
            </Col>
          </Row>

          <Row>

            {this.getPlanets()}

          </Row>

          <Row className='d-flex justify-content-center mt-3'>
            <Col lg={2} hidden={this.state.hidden}>
              <p style={{ textAlign: 'right', marginTop: '10px' }}>
                {`${this.state.listStart} - ${this.state.listEnd} 
              of ${this.state.count}`}
              </p>
            </Col>
            <Col lg={2} hidden={this.state.hidden}>
              <Button onClick={this.handlePrev.bind(this)}  ><FaChevronLeft></FaChevronLeft> </Button>
              <Button onClick={this.handleNext.bind(this)}><FaChevronRight></FaChevronRight> </Button>
            </Col>

            <center>
              <Spinner size={100} animation={this.state.pagingSpinner} variant="danger" />
            </center>

          </Row>
        </Container>

      </React.Fragment>

    );
  }
}

Planets.propTypes = {
  planets: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Planets);