import { Col, Row } from "react-bootstrap";
import "./sign-in.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function SignInView() {
  return (
    <div className="wrapper sign-in-view-wrapper">
      <div className="sign-in-view-content">
        <h1>Entrar</h1>

        <Form className="sign-in-view-form">
          <Form.Control type="email" placeholder="Email" />
          <Form.Control type="password" placeholder="Senha" />

          <Row xs={2}>
            <Col>
              <Button
                type="button"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Voltar
              </Button>
            </Col>

            <Col>
              <Button type="button" className="submit-form">
                Entrar
              </Button>
            </Col>
          </Row>
          <small>
            Não possui conta? <a href="/sign-up">Crie agora mesmo</a>
          </small>
        </Form>
      </div>
    </div>
  );
}
