import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "solid-bootstrap";
import { FaSolidMagnifyingGlass } from "solid-icons/fa";
import { Component } from "solid-js";
import HeaderLogo from "./HeaderLogo";
import logo from "../logo.svg";

export interface NavigationProps {
  onButton: (page: string) => void;
}

const Navigation: Component<NavigationProps> = (props) => {
  const { onButton } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav class="justify-content-center align-items-center">
          <HeaderLogo text="Бубамара" logo={logo} link="" />
          {/* onClick={() => onButton("home")} */}
          <Nav.Link onClick={() => onButton("lecture")}>Курсеви</Nav.Link>
          <Nav.Link onClick={() => onButton("quiz")}>Тестови</Nav.Link>
          <Nav.Link onClick={() => onButton("diary")}>Дневник</Nav.Link>
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
