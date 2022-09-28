import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../../App.module.css';

const LectureSoilBasic:Component = () => {
    return (
        <Container class={styles.Lecture}>
        <div>
            <h2>Почва</h2>
            <div style={{"text-align": "left"}}>
                <ul>
                    <li>Познати медиуми за почва:</li>
                        <ul>
                            <li>Хумус</li>
                            <li>Перлит</li>
                            <li>Песок</li>
                            <li>Кокосови влакна</li>
                            <li>Глина</li>
                            <li>Перлит или вермикулит</li>
                            <li>Кора од дрво</li>
                        </ul>
                    <li>Најчесто медиумите се мешаат со различни соодноси за секое растение посебно</li>
                    <li>рН вредност на просечна почва за садење: 5,5 - 7,5</li>
                    <li>Различен медиум - различни карактеристики</li>
                </ul>
            </div>
        </div>
        </Container>
    );
}

export default LectureSoilBasic;