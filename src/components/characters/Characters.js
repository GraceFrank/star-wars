import React, { Component } from 'react';
import propTypes from 'prop-types';
import axiosQueries from '../../queries/';
import { connect } from 'react-redux';
import { fetch_starships } from '../../redux/actions/starshipActions';
import { assets } from '../../assets/assets';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaLongArrowAltRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      next: null,
      prev: null,
      count: null,
      pageCount: null,
      listStart: null,
      listEnd: null,
      hidden: true,

    }
  }

  async componentDidMount() {

    const characters = await axiosQueries.Get(`people/`)
    this.setState({
      characters: characters.data.results,
      next: characters.data.next,
      prev: characters.data.previous,
      count: characters.data.count,
      listStart: 1,
      listEnd: characters.data.results.length,
      hidden: false,
    });
    console.log(characters);
    console.log(this.state.characters);
    console.log(this.state.next);
    console.log(this.state.prev);
    console.log(this.state.count);

    this.props.fetch_starships();
  }

  async handlePrev() {
    let { prev, count, listStart, listEnd, characters } = this.state;
    listEnd = listEnd - characters.length;
    if (listStart === 1) {
      return;
    }

    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(prev)
      .then(characters => {
        listStart = listStart - characters.data.results.length;
        this.setState({
          characters: characters.data.results,
          next: characters.data.next,
          prev: characters.data.previous,
          count: characters.data.count,
          pageCount,
          listStart,
          listEnd,

        });
      })
  }

  async handleNext() {
    let { next, count, listStart, listEnd, characters } = this.state;
    listStart = listStart + characters.length
    if (listEnd == count) {
      return;
    }
    const pageCount = Math.floor(count / 10);
    await axiosQueries.Get(next)
      .then(characters => {
        listEnd = listEnd + characters.data.results.length;
        this.setState({
          characters: characters.data.results,
          next: characters.data.next,
          prev: characters.data.previous,
          count: characters.data.count,
          pageCount,
          listStart,
          listEnd,
        });
      })
  }

  getCharacters() {
    const images = assets.characters, MIN = 1;

    //Math.floor(Math.random() * (max - min + 1)) + min

    return this.state.characters.map((character, index) => {
      return (
        <Col lg={6} className='py-3'>
          <Row>
            <Col lg={6} >
              <Image
                width={350}
                height={350}
                src={require(`../../assets/${images[index]}`)} />
            </Col>
            <Col lg={6} className='char-text'>
              <p className='pt-4'>
                <h1>{character.name}</h1>
              </p>
              <p>
                <h3>{character.birth_year}</h3>
              </p>
              <p>
                <h3>{character.gender}</h3>
              </p>
              <Button className='char-btn'>
                Read More
                  <span className='ml-3'>
                  <FaLongArrowAltRight />
                </span>
              </Button>
            </Col>
          </Row>
        </Col >
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid className=' px-5 pb-5 ' >
          <Row className="pt-4 mb-5 ">
            <Col>
              <Row className='mt-4 d-flex justify-content-center'>
                <h1 className='ml-2 display-6 text-dark-50'>
                  <strong>Starwars Characters</strong>
                </h1>
              </Row>
              <Row>
                <div className='bg-dark title-underline'></div>
              </Row>
            </Col>
          </Row>

          <Row className='px-5'>
            {this.getCharacters()}
          </Row>

          <Row className='d-flex justify-content-center mt-3'>
            <Col lg={2} hidden={this.state.hidden}>
              <p style={{ textAlign: 'right', marginTop: '10px' }}>
                {`${this.state.listStart} - ${this.state.listEnd} 
              of ${this.state.count}`}
              </p>
            </Col>
            <Col lg={1} hidden={this.state.hidden}>
              <Button onClick={this.handlePrev.bind(this)}  ><FaChevronLeft></FaChevronLeft> </Button>
              <Button onClick={this.handleNext.bind(this)}><FaChevronRight></FaChevronRight> </Button>
            </Col>

          </Row>
        </Container>


      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  starships: state.starships.items
});
export default connect(mapStateToProps, { fetch_starships })(Characters);