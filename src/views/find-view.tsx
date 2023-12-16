import { useEffect, useState } from "react";
import { CardComponent } from "../components/card";
import { CustomNavbar } from "../components/navbar";
import "./find-view.scss";
import { Col, Container, Form, Row } from "react-bootstrap";

export interface DigitalCardItemProps {
  id: number;
  title: string;
  description: string;
}

export function FindView() {
  const [cards] = useState<DigitalCardItemProps[]>([
    {
      id: 1,
      title: "[Mock] Fandom A",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet, saepe rem nam repellat nemo. At necessitatibus amet blanditiis beatae, laboriosam perspiciatis id inventore ut laudantium sequi exercitationem, incidunt placeat!",
    },
    {
      id: 2,
      title: "[Mock] Fandom B",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet, saepe rem nam repellat nemo. At necessitatibus amet blanditiis beatae, laboriosam perspiciatis id inventore ut laudantium sequi exercitationem, incidunt placeat!",
    },
    {
      id: 3,
      title: "[Mock] Fandom C",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet, saepe rem nam repellat nemo. At necessitatibus amet blanditiis beatae, laboriosam perspiciatis id inventore ut laudantium sequi exercitationem, incidunt placeat!",
    },
    {
      id: 4,
      title: "[Mock] Fandom D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet, saepe rem nam repellat nemo. At necessitatibus amet blanditiis beatae, laboriosam perspiciatis id inventore ut laudantium sequi exercitationem, incidunt placeat!",
    },
  ]);
  const [cardsToShow, setCardsToShow] = useState<DigitalCardItemProps[]>([]);
  const [searchText, setSearchText] = useState<string>();

  useEffect(() => {
    setCardsToShow(cards);
  }, [cards]);

  function doFilter(text: string) {
    setCardsToShow(cards.filter((el) => el.title.includes(text)));
  }

  return (
    <div className="wrapper">
      <CustomNavbar />
      <div className="find-view-content">
        <h1>
          Encontre os melhores <br />
          fã clubes aqui!
        </h1>
        <Form.Control
          className="find-view-input"
          placeholder="Pesquise seu fã clube favorito..."
          value={searchText}
          onChange={(ev: any) => {
            setSearchText(ev.currentTarget.value);
            doFilter(ev.currentTarget.value);
          }}
        />

        <Container className="card-list">
          <Row xs={3}>
            {cardsToShow.map((el) => (
              <Col>
                <CardComponent {...el} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
