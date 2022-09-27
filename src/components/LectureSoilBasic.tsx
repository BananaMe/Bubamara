import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../App.module.css';

const LectureSoilBasic:Component = () => {
    return (
        <Container class={styles.Lecture}>
        <div>
            <h2>Почва</h2>
            <div style={{"text-align": "left"}}>

            </div>
        </div>
        </Container>
    );
}

export default LectureSoilBasic;