import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from "../App.module.css";

const LectureOrchidPropagation: Component = () => {
  return (
    <Container class={styles.Lecture}>
      <div>
        <h2>Пропагација</h2>
        <div style={{ "text-align": "left" }}>
          <p>
            Пропагација преку семе е многу тешко изводливо нешто бидејќи
            семињата немаат хранливи ткива за складирање за да може да опстои
            само. Потребно е да падне таму каде што има одреден вид на габи кои
            ќе можат да навлезат во неговиот корен и да ги претворат хранливите
            материи во употреблива форма. За да се надминат шансите, капсулата
            со семе содржи милиони микроскопски семиња кои можат да се однесат
            стотици километри од мајчиното растение.
          </p>
          <p>
            Два познати начини за пропагација на орхидеа е преку поделба или
            преку изданоци, познати како „кеики“. Поделба се прави кога
            орхидеата ќе порасне уште едно пупче, се остава да порасне за да
            може да воспостави повеќе корења и после нежно се издвојуваат преку
            корењата кои се поделуваат соодветно да има за двете орхидеи.
            Пропагација преку кеики се случува така што расте ново растение на
            стеблото (со цветови) на главната орхидеа. Се остава да пушти корења
            од 5 cm должина пред да се исече стеблото и потоа се сади како
            обична орхидеа. Може да помине 1 до 3 години пред да кеиката пушти
            цветови.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default LectureOrchidPropagation;