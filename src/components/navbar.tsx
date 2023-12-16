import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.scss";
import { Button } from "react-bootstrap";

export function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar navbar-dark bg-dark ">
      <Container>
        <Navbar.Brand href="/">MyClub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/find">Find</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Button variant="outline-light" onClick={() => {window.location.href="/sign-in"}}>Entrar</Button>
      </Container>
    </Navbar>
  );
}
