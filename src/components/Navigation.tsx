import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "solid-bootstrap";
import { FaSolidMagnifyingGlass } from "solid-icons/fa";
import { Component } from "solid-js";
import logo from "../logo.svg";
import HeaderLogo from "./HeaderLogo";

export interface NavigationProps {
  onButtonClick: (page: string) => void;
}

const Navigation: Component<NavigationProps> = (props) => {
  const { onButtonClick } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav class="justify-content-center align-items-center">
          <HeaderLogo
            text="Бубамара"
            logo={logo}
            onButton={() => onButtonClick("home")}
          />
          <Nav.Link onClick={() => onButtonClick("lecture")}>Курсеви</Nav.Link>
          <Nav.Link onClick={() => onButtonClick("quiz")}>Тестови</Nav.Link>
          <Nav.Link onClick={() => onButtonClick("diary")}>Дневник</Nav.Link>
        </Nav>
        <Form class="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            class="me-2"
            aria-label="Search"
          />
          <Button variant="outline-succes">
            <FaSolidMagnifyingGlass size={24} color="#000000" />
          </Button>
        </Form>
        {/* <form onSubmit={Account.updateProfile} class="form-widget">
          <button
            type="button"
            class="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Одјавете се
          </button>
        </form> */}
      </Container>
    </Navbar>
  );
};

export default Navigation;
