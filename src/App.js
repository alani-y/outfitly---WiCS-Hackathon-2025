import logo from './logo.svg';
import './App.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Homepage = () => {
  return (
    // style={{ backgroundColor: "pink", minHeight: "100vh" }}
    // className="container mx-auto p-8 text-center bg-pink-200 min-h-screen flex flex-col justify-center items-center"
    <div className="homepage">
      /*<h1 className="text-5xl font-bold mb-2 text-pink-800">What Are You Looking For?</h1>
      <h2 className="text-2xl mb-8 text-gray-600">Dress Better, Stress Less</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-800">An Outfit For A...</h3>
        <p className="text-lg text-gray-700">any event!</p>
      </div>

      <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title>Style</Card.Title>
              <Card.Text>Explore different outfit styles</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title>Palette</Card.Title>
              <Card.Text>Match colors for your outfits</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

      <div className="grid grid-cols-2 gap-6">
          <h3 className="text-lg font-medium">Palette</h3>
          <p>Match colors for your outfits</p>
      </div>
    </div>
  );
};

export default Homepage;
