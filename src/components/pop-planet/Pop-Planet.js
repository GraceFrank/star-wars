import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assets } from '../../assets/assets';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

class PopularPlanets extends Component {


  render() {


    return (
      <React.Fragment>
        <Container className=' p-5'>

          <Row>
            <Col className='my-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img className='imgee' variant="top" src={require(`../../assets/${image}`)} />
                <Card.Body>
                  <Card.Title>Ghost</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button className='card-btn'>
                    Read More
                <span className='ml-3'>
                      <FaLongArrowAltRight />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {})(PopularPlanets);