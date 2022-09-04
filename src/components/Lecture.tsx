import { Container, Tab, Tabs } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import Gallery from "./Gallery";
import LectureBasic from "./LectureBasic";
import LectureLightFlower from "./LectureLightFlower";
import LecturePropagation from "./LecturePropagation";
import LectureSoil from "./LectureSoil";
import LectureWater from "./LectureWater";

const Lecture: Component = () => {
  const [key, setKey] = createSignal("lectureBasic");
  return (
    <Container>
      <h1>Орхидеа</h1>
      <Tabs
        defaultActiveKey="lectureBasic"
        id="uncontrolled-tab-example"
        class="mb-3"
      >
        <Tab eventKey="lectureBasic" title="Основни Информации">
          <LectureBasic />
        </Tab>
        <Tab eventKey="lectureSoil" title="Почва">
          <LectureSoil />
        </Tab>
        <Tab eventKey="lectureWater" title="Наводнување">
          <LectureWater />
        </Tab>
        <Tab eventKey="lectureLightFlower" title="Светлина и цветање">
          <LectureLightFlower />
        </Tab>
        <Tab eventKey="lecturePropagation" title="Пропагација">
          <LecturePropagation />
        </Tab>
        <Tab eventKey="gallery" title="Галерија">
            <Gallery/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Lecture;
