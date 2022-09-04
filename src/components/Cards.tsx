import { Component } from "solid-js";
import { Card } from "solid-bootstrap";

export interface CardProps {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
  color?: string;
  onButton: (page: string) => void;
}

const Cards: Component<CardProps> = (props) => {
  const { title, subtitle, text, onButton, buttonText, color="#bbd9c4" } = props;
  return (
    <Card style={{ width: "18rem", "background-color": color, "margin-top": "2rem"}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle class="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <button class="btn btn-secondary" onclick={() => onButton("lecture")}>
          {buttonText}
        </button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
