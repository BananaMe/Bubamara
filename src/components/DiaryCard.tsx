import "bootstrap/scss/bootstrap.scss";
import { Button, Card, ListGroup } from "solid-bootstrap";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";
import { downloadImage } from "./download-image";


export interface DiaryCardProps {
  id: number;
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
  onDelete?: () => void
}
const DiaryCard: Component<DiaryCardProps> = (props) => {
  const {
    id,
    name,
    tip,
    dateBought,
    placement,
    lastWater,
    lastFertilizer,
    imageUrl,
    onButtonClick,
    buttonText,
    onDelete = () => undefined,
    // color = "#bbd9c4",
  } = props;

  const [resolvedImageUrl, setResolvedImageUrl] = createSignal<string>();
  createEffect(() => {
    if (imageUrl) downloadImage(imageUrl, setResolvedImageUrl);
  });

  const deleteEntry = async (e: Event) => {
    e.preventDefault();

    try {
      let { error } = await supabase.from("diaries").delete().match({ id });

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      onDelete();
    }
  };

  return (
    <div>
      <Card
        style={{
          width: "20rem",
          // "background-color": color,
          "margin-left": "2rem",
          "margin-top": "2rem",
        }}
      >
        <Card.Body>
          <Card.Img variant="top" src={resolvedImageUrl()} style="border-style: solid; border-width: thin; border-radius: 5px; border-color: #d9e2ef" />
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle class="mb-2 text-muted">{tip}</Card.Subtitle>
          <ListGroup>
            <ListGroup.Item style="padding: 5px">Датум земено: {dateBought}</ListGroup.Item>
            <ListGroup.Item style="padding: 5px">Местоположба: {placement}</ListGroup.Item>
            <ListGroup.Item style="padding: 5px">Последно полевање: {lastWater}</ListGroup.Item>
            <ListGroup.Item style="padding: 5px">Последна прихрана: {lastFertilizer}</ListGroup.Item>
          </ListGroup>
          <Button variant="secondary">Ажурирај</Button>
          <Button onClick={deleteEntry} variant="secondary">Избриши</Button>
        </Card.Body>
      </Card>
    </div>
  )

};

export default DiaryCard;
