import { Button, Col, Form, Row } from "react-bootstrap";
import "./sign-up.scss";

export function SignUpView() {
  return (
    <div className="wrapper sign-in-view-wrapper">
      <div className="sign-up-view-content">
        <a href="/">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </a>

        <div className="sign-up-view-title">
          <h1>Faça seu cadastro</h1>
          <p className="w-50 text-muted">
            Junte-se à comunidade MyClub e desbloqueie um mundo de recompensas
            exclusivas para os verdadeiros fãs!"
          </p>
        </div>

        <Form>
          <Row xs={2} className="sign-up-view-inputs">
            <Col>
              <Form.Control
                className="mb-4"
                type="text"
                placeholder="Nome completo"
              />
            </Col>
            <Col>
              <Form.Control
                className="mb-4"
                type="text"
                placeholder="Data de nascimento"
              />
            </Col>
            <Col>
              <Form.Control className="mb-4" type="email" placeholder="Email" />
            </Col>
            <Col>
              <Form.Control
                className="mb-4"
                type="text"
                placeholder="Telefone"
              />
            </Col>
            <Col>
              <Form.Control
                className="mb-4"
                type="password"
                placeholder="Senha"
              />
            </Col>

            <Col>
              <Button type="button" className="submit-form">
                Criar conta
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
