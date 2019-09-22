import React, { Component } from 'react';
import axiosQueries from '../../queries/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Starship from './Starship';

import { assets } from '../../assets/assets';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { FaLongArrowAltRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      next: null,
      prev: null,
      count: null,
      pageCount: null,
      listStart: null,
      listEnd: null,
      hidden: true,
      spinner: 'border',
      showModal: false,
      modalStarship: {},
      starshipIndex: 0,
      pagingSpinner: 'none',
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    const starships = props.starships;
    this.setState({
      starships: starships.data.results,
      next: starships.data.next,
      prev: starships.data.previous,
      count: starships.data.count,
      listStart: 1,
      listEnd: starships.data.results.length,
      hidden: false,
      spinner: 'none',
    });
  }

  async handlePrev() {
    let { prev, count, listStart, listEnd, starships } = this.state;
    listEnd = listEnd - starships.length;
    if (listStart === 1) {
      return;
    }

    this.setState({
      pagingSpinner: 'border',
    })

    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(prev)
      .then(starships => {
        listStart = listStart - starships.data.results.length;
        this.setState({
          starships: starships.data.results,
          next: starships.data.next,
          prev: starships.data.previous,
          count: starships.data.count,
          pageCount,
          listStart,
          listEnd,
          spinner: 'none',
          pagingSpinner: 'none'

        });
      })

  }

  async handleNext() {
    let { next, count, listStart, listEnd, starships } = this.state;
    listStart = listStart + starships.length
    if (listEnd === count) {
      return;
    }
    this.setState({
      pagingSpinner: 'border',
    })

    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(next)
      .then(starships => {
        listEnd = listEnd + starships.data.results.length;
        this.setState({
          starships: starships.data.results,
          next: starships.data.next,
          prev: starships.data.previous,
          count: starships.data.count,
          pageCount,
          listStart,
          listEnd,
          spinner: 'none',
          pagingSpinner: 'none',
        });
      })
  }


  onShow = (starship, index) => () => {
    this.setState({
      showModal: true,
      modalStarship: starship,
      starshipIndex: index
    });
  }

  handleClose = () => () => {
    this.setState({ showModal: false });
  }

  getStarships() {
    const image = assets.starships;

    return this.state.starships.map((starship, index) => {
      return (
        <Col className='my-4' key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img className='imgee' variant="top" src={require(`../../assets/${image[index]}`)} />
            <Card.Body>
              <Card.Title>{starship.name}</Card.Title>
              <Card.Text>
                Model: {starship.model}
                Capacity: {starship.cargo_capacity}
              </Card.Text>
              <Button onClick={this.onShow(starship, index)} className='card-btn'>
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
          <Starship show={this.state.showModal} starshipIndex={this.state.starshipIndex}
            handleClose={this.handleClose()} modalStarship={this.state.modalStarship} />

          <Row className="pt-4 mb-5 ">

            <Col>
              <center>
                <Spinner size={100} animation={this.state.spinner} variant="success" />
              </center>
              <Row className='mt-4 d-flex justify-content-center'>
                <h1 className='ml-2 display-6 text-dark-50'>
                  <strong>Starwars Starships</strong>
                </h1>
              </Row>
              <Row>
                <div className='bg-dark title-underline'></div>
              </Row>
            </Col>
          </Row>

          <Row>

            {this.getStarships()}

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

Starships.propTypes = {
  starships: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Starships);