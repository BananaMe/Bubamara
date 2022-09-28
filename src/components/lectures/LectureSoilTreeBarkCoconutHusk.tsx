import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../../App.module.css';

const LectureSoilTreeBarkCoconutHusk: Component = () => {
    return (
        <Container class={styles.Lecture}>
            <div>
                <h2>Кора од дрво и кокосови влакна</h2>
                <div style={{ "text-align": "left" }}>
                    <p>
                        Кора од дрво се користи како поглавен медиум во почва за тропски растенија, но 
                        исто така и како прекривка за во градина бидејќи не држи многу вода и е доста 
                        воздушест. За орхидеи само се користи кора од дрво како единствен медиум за почва.
                    </p>
                    <p>
                        Кокосови влакна се соодветни за секој тип на растение освен за месојадните. Медиум со 
                        кокосови влакна е способен да ги задржува хранливите материи и да ги ослободува постепено. 
                        Одржува соодветна рамнотежа помеѓу задржувањето на водата и капацитетот за аерација.
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default LectureSoilTreeBarkCoconutHusk;