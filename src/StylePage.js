import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



function StylePage() {
  return (

    <div className="western-page">
      <div className="w-100 min-vh-50 bg-pink-200 text-center py-5">
      <h1 className="western-title display-3 fw-bold text-pink-800">Western</h1>
        <h2 className="western-title fs-4 text-secondary">Howdy</h2>
        </div>

        <Container className="py-4 g-3">
          <Row className="w-100 mb-4"> {/* First Row */}
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <div className="image-container">
                  <Card.Img variant="top" src="/images/cowboy hat.png" className="cropped-img" />
                </div>
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Cowboy Hat</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Fringe Jacket</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Western Boots</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="w-100"> {/* Second Row */}
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Denim Jeans</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Bolo Tie</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Card className="polaroid-card">
                <Card.Body className="polaroid-body">
                  <Card.Title className="card-title polaroid-title">Plaid Shirt</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Link to="/">Return to Home</Link>
    </div>
  );
}


export default StylePage;
