import React, { Component } from 'react';
import axiosQueries from '../../queries/';
import { connect } from 'react-redux';
import { assets } from '../../assets/assets';

//Modal to display full page of character
import Character from './Character';

import { Container, Row, Col, Image, Button, Spinner, } from 'react-bootstrap';
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
      spinner: 'border',
      showModal: false,
      modalCharacter: {},
      charIndex: 0,
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
      spinner: 'none',
    });
  }

  async handlePrev() {
    let { prev, count, listStart, listEnd, characters } = this.state;
    listEnd = listEnd - characters.length;
    if (listStart === 1) {
      return;
    }

    this.setState({
      spinner: 'border',
    })

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
          spinner: 'none',

        });
      })

  }

  async handleNext() {
    let { next, count, listStart, listEnd, characters } = this.state;
    listStart = listStart + characters.length
    if (listEnd == count) {
      return;
    }
    this.setState({
      spinner: 'border',
    })

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
          spinner: 'none',
        });
      })
  }


  onShow = (character, index) => () => {

    this.setState({
      showModal: true,
      modalCharacter: character,
      charIndex: index
    });
  }

  handleClose = () => () => {
    this.setState({ showModal: false });
  }


  getCharacters() {
    const image = assets.characters, MIN = 1;

    //Math.floor(Math.random() * (max - min + 1)) + min

    return this.state.characters.map((character, index) => {

      return (
        <Col lg={6} className='py-3'>
          <Row>
            <Col lg={6} >
              <Image
                width={350}
                height={350}
                src={require(`../../assets/${image[index]}`)} />
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
              <Button onClick={this.onShow(character, index)} className='char-btn'>
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
          <Character show={this.state.showModal} charIndex={this.state.charIndex}
            handleClose={this.handleClose()} modalCharacter={this.state.modalCharacter} />

          <Row className="pt-4 mb-5 ">

            <Col>
              <center>
                <Spinner size={100} animation={this.state.spinner} variant="success" />
              </center>
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

            <center>
              <Spinner size={100} animation={this.state.spinner} variant="danger" />
            </center>

          </Row>


        </Container>


      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  starships: state.starships.items
});
export default connect(mapStateToProps, {})(Characters);