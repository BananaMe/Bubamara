import { Container, Navbar } from 'solid-bootstrap';
import type { Component } from 'solid-js';
import styles from '../App.module.css';


export interface HeaderProps {
  link: string;
  text: string;
  logo: string;
}

const HeaderLogo: Component<HeaderProps> = (props) => {
  const { link, text, logo } = props;
  return (
    <Navbar bg="light" variant="light" class={styles.header} style={{"padding":0}}>
      <Container>
        <Navbar.Brand href={link}>
          <img alt="" src={logo} width="30" height="30" />
          {text}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};


export default HeaderLogo;
