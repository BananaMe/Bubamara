import { Container, Tab, Tabs } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import GalleryOrchid from "./GalleryOrchid";
import LectureOrchidBasic from "./LectureOrchidBasic";
import LectureOrchidLightFlower from "./LectureOrchidLightFlower";
import LectureOrchidPropagation from "./LectureOrchidPropagation";
import LectureOrchidSoil from "./LectureOrchidSoil";
import LectureOrchidWater from "./LectureOrchidWater";

const LectureOrchid: Component = () => {
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
          <LectureOrchidBasic />
        </Tab>
        <Tab eventKey="lectureSoil" title="Почва">
          <LectureOrchidSoil />
        </Tab>
        <Tab eventKey="lectureWater" title="Наводнување">
          <LectureOrchidWater />
        </Tab>
        <Tab eventKey="lectureLightFlower" title="Светлина и цветање">
          <LectureOrchidLightFlower />
        </Tab>
        <Tab eventKey="lecturePropagation" title="Пропагација">
          <LectureOrchidPropagation />
        </Tab>
        <Tab eventKey="gallery" title="Галерија">
          <GalleryOrchid />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default LectureOrchid;
