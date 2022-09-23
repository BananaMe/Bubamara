import { Card, ListGroup } from "solid-bootstrap";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";

export interface DiaryCardProps {
  name: string;
  tip: string;
  dateBought: string;
  placement: string;
  lastWater: string;
  lastFertilizer: string;
  imageUrl: string;
  onButtonClick?: string;
  buttonText?: string;
  color?: string;
}
const DiaryCard: Component<DiaryCardProps> = (props) => {
  const {
    name,
    tip,
    dateBought,
    placement,
    lastWater,
    lastFertilizer,
    imageUrl,
    onButtonClick,
    buttonText,
    color = "#bbd9c4",
  } = props;

  const [resolvedImageUrl, setResolvedImageUrl] = createSignal<string>();
  createEffect(() => {
    if (imageUrl) downloadImage(imageUrl);
  });

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setResolvedImageUrl(url);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error downloading image: ", error.message);
      }
    }
  };

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          "background-color": color,
          "margin-top": "2rem",
        }}
      >
        <Card.Body>
          <Card.Img variant="top" src={resolvedImageUrl()} />
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle class="mb-2 text-muted">{tip}</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>Датум земено: {dateBought}</ListGroup.Item>
            <ListGroup.Item>Местоположба: {placement}</ListGroup.Item>
            <ListGroup.Item>Последно полевање: {lastWater}</ListGroup.Item>
            <ListGroup.Item>Последна прихрана: {lastFertilizer}</ListGroup.Item>
          </ListGroup>
          {/* <button class="btn btn-secondary" onclick={() => onButtonClick()}>
            {buttonText}
          </button> */}
        </Card.Body>
      </Card>
    </div>
  )

};

export default DiaryCard;
