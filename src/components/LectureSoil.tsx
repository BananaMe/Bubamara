import { Tab, Tabs } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import LectureSoilBasic from "./LectureSoilBasic";

const LectureSoil: Component = () => {
    const [key, setKey] = createSignal("lectureSoilBasic");
    return (
        <>
            <h1>Орхидеа</h1>
            <Tabs
                defaultActiveKey="lectureSoilBasic"
                id="uncontrolled-tab-example"
                class="mb-3"
            >
                <Tab eventKey="lectureSoilBasic" title="Основни Информации">
                    <LectureSoilBasic />
                </Tab>
                <Tab eventKey="lectureSoil" title="Почва">
                    {/* <LectureOrchidSoil /> */}
                </Tab>
                <Tab eventKey="lectureWater" title="Наводнување">
                    {/* <LectureOrchidWater /> */}
                </Tab>
                <Tab eventKey="lectureLightFlower" title="Светлина и цветање">
                    {/* <LectureOrchidLightFlower /> */}
                </Tab>
                <Tab eventKey="lecturePropagation" title="Пропагација">
                    {/* <LectureOrchidPropagation /> */}
                </Tab>
                <Tab eventKey="gallery" title="Галерија">
                    {/* <GalleryOrchid /> */}
                </Tab>
            </Tabs>
        </>
    );
}

export default LectureSoil;