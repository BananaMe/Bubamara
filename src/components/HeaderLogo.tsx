import { Nav, Navbar } from "solid-bootstrap";
import type { Component } from "solid-js";

export interface HeaderProps {
  text: string;
  logo: string;
  onButton: () => void;
}

const HeaderLogo: Component<HeaderProps> = (props) => {
  const { text, logo, onButton } = props;
  return (
    <Nav.Link onClick={() => onButton()}>
      <img alt="" src={logo} width="30" height="30" />
      {text}
    </Nav.Link>
  );
};

export default HeaderLogo;
