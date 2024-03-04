import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Bootstrap = () => {
  return (
    <div>
      {/* <button>Click</button> */}
      <Container>
        <Button className="btn-danger">Click</Button>
        <Row>
          <Col></Col>
        </Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.ody>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.ody>
        </Card>
        B
      </Container>
    </div>
  );
};

export default Bootstrap;
