import { Container, Tab, Tabs } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import Gallery from "./GalleryOrchid";
import LectureLightFlower from "./LectureOrchidLightFlower";
import LectureOrchidBasic from "./LectureOrchidBasic";
import LecturePropagation from "./LectureOrchidPropagation";
import LectureOrchidSoil from "./LectureOrchidSoil";
import LectureSoil from "./LectureOrchidSoil";
import LectureOrchidWater from "./LectureOrchidWater";
import LectureWater from "./LectureOrchidWater";
import LectureOrchidPropagation from "./LectureOrchidPropagation";
import LectureOrchidLightFlower from "./LectureOrchidLightFlower";
import GalleryOrchid from "./GalleryOrchid";

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
