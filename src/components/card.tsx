import { Button, Card } from "react-bootstrap";
import "./card.scss";
import holder from "../assets/holder-party.jpeg";

export function CardComponent(props: any) {
  return (
    <Card className="card-wrapper">
      <Card.Img
        src={holder}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      <Card.Body>
        <Card.Title className="card-body-title">
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Text className="card-body-subtitle">
          {props.description}
        </Card.Text>

        <Button variant="light">Quero participar!</Button>
      </Card.Body>
    </Card>
  );
}
