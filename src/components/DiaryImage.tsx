import { Button, Card, Container } from "solid-bootstrap";
import { Component } from "solid-js";

const DiaryImage: Component = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://pbs.twimg.com/media/D2EOML2X4AEqfM0.jpg/100px180"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DiaryImage;
