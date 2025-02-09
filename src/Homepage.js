import logo from './logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import StylePage from './StylePage';


const Homepage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCardClick = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };


  return (


    <div className="homepage">
      <div className="w-100 min-vh-50 bg-pink-200 text-center py-5">
      <h1 className="display-3 fw-bold text-pink-800">What Are You Looking For?</h1>
        <h2 className="fs-4 text-secondary">Dress Better, Stress Less</h2>
        </div>


      <Container className="py-3 text-left">
        <h3 className="text-pink-800 fw-bold fs-3 text-left mb-2">An Outfit For A...</h3>
        <p className="text-secondary align-self-start mb-3">any event!</p>
      </Container>


      <Container className="d-flex justify-content-center align-items-center py-4 g-3">
      <Row className="w-100">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="w-100 h-100 shadow-lg custom-border" onClick={() => handleCardClick("style")}>
            <Card.Body>
              <Card.Title className="text-center">Style</Card.Title>
              <Card.Text className="text-center">Explore different outfit styles</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={6} className="d-flex justify-content-center">
          <Card className="w-100 h-100 shadow-lg custom-border" onClick={() => handleCardClick("palette")}>
            <Card.Body>
              <Card.Title className="text-center">Palette</Card.Title>
              <Card.Text className="text-center">Match colors for your outfits</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


    {/* Conditionally Rendered Additional Cards */}
    {expandedCard === "style" && (<Container className="my-4">
          <Row>
            <Col md={4}><Card className="shadow"><Card.Body>Casual</Card.Body></Card></Col>
            {/*<Link to="/StylePage.js">*/}
            <Col md={4}>
                <Card className="shadow">
                    <Link to="/style" className="text-decoration-none text-dark">
                    <Card.Body>Western</Card.Body>
                    </Link>
                </Card>
            </Col>


            <Col md={4}><Card className="shadow"><Card.Body>Formal</Card.Body></Card></Col>
          </Row>
        </Container>
      )}


      {expandedCard === "palette" && (
        <Container className="my-4">
          <h2 className="text-pink-800 fw-bold">Pick Your Fav Color...</h2>
          <p className="text-secondary">swipe for more options!</p>
          <Container className="border border-pink-800 rounded p-3 bg-white shadow-lg d-flex justify-content-center align-items-center" style={{ width: '90%', maxWidth: '900px' }}>
            <Row className="g-2 w-100">
              {Array.from({ length: 12 }).map((_, index) => (
                <Col key={index} xs={2} md={3} lg={2} className="d-flex justify-content-center">
                  <Card className="border border-pink-800" style={{ width: '80px', height: '80px' }} onClick={() => setSelectedColor(index)}></Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      )}
      {selectedColor !== null && (
        <Container className="my-4 text-center">
          <h2 className="text-pink-800 fw-bold">Choose a Color Combo...</h2>
          <p className="text-secondary">Choose one!</p>
          <Row className="g-3 d-flex justify-content-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <Col key={index} xs={4} md={4} lg={4} className="d-flex justify-content-center">
                <Card className="border border-pink-800 shadow-lg" style={{ width: '220px', height: '90px' }}></Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};




export default Homepage;
