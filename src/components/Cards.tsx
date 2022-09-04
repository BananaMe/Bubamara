import { Component } from "solid-js";
import { Card } from "solid-bootstrap";

export interface CardProps {
  title: string;
  subtitle: string;
  text: string;
  onButton: (page: string) => void;
}

const Cards: Component<CardProps> = (props) => {
  const { title, subtitle, text, onButton } = props;
  return (
    <Card style={{ width: "18rem", "background-color": "#DCEBE0"}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle class="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <button class="btn btn-secondary" onclick={() => onButton("lecture")}>
          Линк до курсот
        </button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
