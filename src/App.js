import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Carousel} from 'react-bootstrap' 
function App() {
  return (
    <div className="App">
      <h1> Welcome to my first React WS </h1>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2021-04/500pxRF_14967543.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850" />
  <Card.Body>
    <Card.Title> Greece SANTORINI , pictures , sea , vocation </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="success"> Visit us </Button>
    
  </Card.Body>
</Card>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg2NzAwNTcwMzM1/greece-attica-athens-acropolis-listed-as-world-heritage-by-unesco.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thedoriahotelkas.com/wp-content/uploads/2020/03/Hand-Luggage-Only-7.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;
