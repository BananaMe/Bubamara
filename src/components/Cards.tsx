import { Card } from "solid-bootstrap";
import { Component } from "solid-js";

export interface CardProps {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
  color?: string;
  onButtonClick: () => void;
}

const Cards: Component<CardProps> = (props) => {
  const {
    title,
    subtitle,
    text,
    onButtonClick,
    buttonText,
    color = "#bbd9c4",
  } = props;
  return (
    <Card
      style={{
        width: "18rem",
        "background-color": color,
        "margin-top": "2rem",
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle class="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <button class="btn btn-secondary" onclick={() => onButtonClick()}>
          {buttonText}
        </button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
