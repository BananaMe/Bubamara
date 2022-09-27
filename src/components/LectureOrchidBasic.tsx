import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../App.module.css';

const LectureOrchidBasic: Component = () => {
    
    return (
        <Container class={styles.Lecture}>
            <div>
                <h2>Основни информации</h2>
                <div style={{"text-align": "left"}}>
                    <ul>
                        <li>Латинско Име: Phalaenopsis Orchidacae</li>
                        <li>Лаичко Име: Moth Orchid</li>
                        <li>Тип на растение: Повеќегодишно, тревно</li>
                        <li>Потекло: Тропски шуми, претежно Централна и северозападен предел од Јужна Америка</li>
                        <li>Големина: Може да достигне до 50cm</li>
                        <li>Тип на почва: Кора од дрво</li>
                        <li>рН на почва: 5,5 - 6,0</li>
                        <li>Светлина: Недиректна сончева светлина</li>
                        <li>Време на цут: Зависно, типично трае 6-10 недели</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default LectureOrchidBasic;