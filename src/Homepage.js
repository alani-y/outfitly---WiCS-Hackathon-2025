import logo from './logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StylePage from './StylePage';

const Homepage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCardClick = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  const colors = ["#FF0000", "#FF0000", "#FFF202", "#348C0C", "#427CF0", "#755AEC",
  "#D12291", "#FFFFFF", "#C3C3C3", "#000000", "#78520B", "#FFD1AC"];
  return (
    <div className="homepage">
      <div className="w-100 min-vh-50 bg-pink-200 text-center py-5">
      <h1 className="homepage-title display-3 fw-bold text-pink-800">What Are You Looking For?</h1>
        <h2 className="homepage-title fs-4 text-secondary">Dress Better, Stress Less</h2>
        </div>

      <Container className="py-3 text-left">
        <h3 className="homepage-title text-pink-800 fw-bold fs-3 text-left mb-2">An Outfit For A...</h3>
        <p className="text-secondary align-self-start mb-3">any event!</p>
      </Container>

      <Container className="d-flex justify-content-center align-items-center py-4 g-3">
      <Row className="w-100">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="w-100 h-100 shadow-lg custom-border d-flex flex-row align-items-center" onClick={() => handleCardClick("style")}>
            {/* Left side - Image */}
            <div className="square-img-style-palette">
              <Card.Img src="/images/style image.jpeg" className="square-img"/>
            </div>

            {/* Right side - Text */}
            <Card.Body className="text-container">
              <Card.Title className="homepage-title text-left" style={{ color: "#CB3B67" }}>Style</Card.Title>
              <Card.Text className="homepage-title text-left">Explore different outfit styles</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={6} className="d-flex justify-content-center">
          <Card className="w-100 h-100 shadow-lg custom-border d-flex flex-row align-items-center" onClick={() => handleCardClick("palette")}>
            {/* Left side - Image */}
            <div className="square-img-style-palette">
              <Card.Img src="/images/pink color palette.png" className="square-img"/>
            </div>

            {/* Right side - Text */}
            <Card.Body className="text-container">
              <Card.Title className="homepage-title text-left" style={{ color: "#CB3B67" }}>Palette</Card.Title>
              <Card.Text className="homepage-title text-left">Find an Outfit for a Palette</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


      {/* Conditionally Rendered Additional Cards */}
      {expandedCard === "style" && (
        <Container className="my-4">
          <Row>
            {/* Casual */}
            <Col md={4}>
              <Card className="shadow text-center">
                <div className="square-img-container">
                  <Card.Img src="/images/Streetwear.jpeg" className="square-img" />
                </div>
                <Card.Body>Streetwear</Card.Body>
              </Card>
            </Col>

            {/* Western (with Link) */}
            <Col md={4}>
              <Card className="shadow text-center">
                <Link to="/style" className="text-decoration-none text-dark">
                  <div className="square-img-container">
                    <Card.Img src="/images/western.jpeg" className="square-img" />
                  </div>
                  <Card.Body>Western</Card.Body>
                </Link>
              </Card>
            </Col>

            {/* Formal */}
            <Col md={4}>
              <Card className="shadow text-center">
                <div className="square-img-container">
                  <Card.Img src="/images/business.jpeg" className="square-img" />
                </div>
                <Card.Body>Business Casual</Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      )}

      {expandedCard === "palette" && (
        <Container className="my-4">
          <h2 className="homepage-title fw-bold">Pick Your Fav Color...</h2>
          <p className="text-secondary">swipe for more options!</p>
          <Container className="border border-pink-800 rounded p-3 bg-white shadow-lg d-flex justify-content-center align-items-center" style={{ width: '90%', maxWidth: '900px' }}>
            <Row className="g-2 w-100">
              {Array.from({ length: 12 }).map((_, index) => (
                <Col key={index} xs={2} md={3} lg={2} className="d-flex justify-content-center">
                  <Card className="border border-pink-800" style={{ width: '300px', height: '100px', backgroundColor: colors[index] }} onClick={() => setSelectedColor(index)}></Card>
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
                <Card className="border border-pink-800 shadow-lg" style={{ width: '320px', height: '200px' }}></Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Homepage;

