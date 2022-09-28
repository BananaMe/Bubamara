import { Tab, Tabs } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import GallerySoil from "./GallerySoil";
import LectureSoilBasic from "./LectureSoilBasic";
import LectureSoilHumusSand from "./LectureSoilHumusSand";
import LectureSoilPerliteVermiculite from "./LectureSoilPerliteVermiculite";
import LectureSoilTreeBarkCoconutHusk from "./LectureSoilTreeBarkCoconutHusk";

const LectureSoil: Component = () => {
    const [key, setKey] = createSignal("lectureSoilBasic");
    return (
        <>
            <h1>Почва</h1>
            <Tabs
                defaultActiveKey="lectureSoilBasic"
                id="uncontrolled-tab-example"
                class="mb-3"
            >
                <Tab eventKey="lectureSoilBasic" title="Основни Информации">
                    <LectureSoilBasic />
                </Tab>
                <Tab eventKey="lectureSoil" title="Хумус и песок">
                    <LectureSoilHumusSand />
                </Tab>
                <Tab eventKey="lectureWater" title="Перлит и Вермикулит">
                    <LectureSoilPerliteVermiculite/>
                </Tab>
                <Tab eventKey="lectureLightFlower" title="Кора од дрво и кокосови влакна">
                    <LectureSoilTreeBarkCoconutHusk/>
                </Tab>
                <Tab eventKey="gallery" title="Галерија">
                    <GallerySoil />
                </Tab>
            </Tabs>
        </>
    );
}

export default LectureSoil;