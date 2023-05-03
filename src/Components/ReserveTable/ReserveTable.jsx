import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './ReserveTable.css'


const ReserveTable = () => {
  return (
    <div className='reserve-table-container d-flex flex-column'>
      <div className='heading d-flex flex-column'>
        <h1>Reservation</h1>
        <p>If you have a food allergy, intolerance or sensitivity, please speak to your server about ingredients in our dishes before you order your meal.</p>
      </div>

      <div className="reserve-form-container d-flex flex-column">
          <div className="rt-sub-title">BOOK A TABLE</div>
          <h3 className='rt-title'>Make a Reservation</h3>
          <p className='rt-content'>Etiam porta gravida nisl, in dictum felis consectetur in. Praesent vel purus sed enim luctus vehicula nec et erat. Aenean porttitor tellus eu nunc placerat blandit.</p>

          <div className='rt-form'>
            <Container>
              <Row className='row'>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>TIME</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                      <Form.Label>SEATS</Form.Label>
                      <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='row'>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>YOUR NAME</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>PHONE</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='row'>
                <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>SPECIAL REQUESTS</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Button variant="outline-dark">BOOK NOW</Button>
                </Col>
                <Col></Col>
              </Row>
            </Container>

          </div>
      </div>

    </div>
  )
}

export default ReserveTable
