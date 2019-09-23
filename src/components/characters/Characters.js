import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axiosQueries from '../../queries/';
import { connect } from 'react-redux';
import { assets } from '../../assets/assets';

//Modal to display full page of character
import Character from './Character';

import { Container, Row, Col, Image, Button, Spinner, Dropdown } from 'react-bootstrap';
import { FaLongArrowAltRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      newCharacters: [],
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
      pagingSpinner: 'none',
    }
  }

  UNSAFE_componentWillReceiveProps(props) {

    const characters = props.characters;
    this.setState({
      characters: characters.data.results,
      newCharacters: characters.data.results,
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
      pagingSpinner: 'border',
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
          pagingSpinner: 'none'
        });
      })
  }

  async handleNext() {
    let { next, count, listStart, listEnd, characters } = this.state;
    listStart = listStart + characters.length
    if (listEnd === count) {
      return;
    }
    this.setState({
      pagingSpinner: 'border',
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
          pagingSpinner: 'none',
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

  handleFilterAll() {
    const { newCharacters } = this.state;
    this.setState({
      characters: newCharacters,
    })
  }

  handleFilterFemale() {
    const { newCharacters } = this.state;
    let characters = [];
    newCharacters.find(char => {
      if (char.gender === "female") {
        characters.push(char);
      }
      return null;
    })
    this.setState({
      characters
    })
  }

  handleFilterMale() {
    const { newCharacters } = this.state;
    let characters = [];
    newCharacters.find(char => {
      if (char.gender === "male") {
        characters.push(char);
      }
      return null;
    })
    this.setState({
      characters
    })
  }

  getCharacters() {
    const image = assets.characters, min = 0;

    return this.state.characters.map((character, index) => {
      return (
        <Col lg={6} className='py-3' key={index}>
          <Row>
            <Col lg={6} >
              <Image
                width={350}
                height={350}
                src={require(`../../assets/${image[Math.floor(Math.random() * (index - min + 1)) + min]}`)} />
            </Col>
            <Col lg={6} className='char-text'>
              <h1 className='pt-4'>{character.name}</h1>
              <h3>{character.birth_year}</h3>
              <h3>{character.gender}</h3>
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
          <Row className='pl-5'>
            <Dropdown className='ml-3'>
              <Dropdown.Toggle variant="primary" id="dropdown-outline">
                FILTER
                <Dropdown.Menu>
                  <Dropdown.Item onSelect={this.handleFilterAll.bind(this)}>All</Dropdown.Item>
                  <Dropdown.Item onSelect={this.handleFilterFemale.bind(this)}>Female</Dropdown.Item>
                  <Dropdown.Item onSelect={this.handleFilterMale.bind(this)}>Male</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
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
              <Spinner size={100} animation={this.state.pagingSpinner} variant="danger" />
            </center>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

Characters.propTypes = {
  characters: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(Characters);