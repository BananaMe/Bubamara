import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from "../App.module.css";

const LectureOrchidSoil: Component = () => {
  return (
    <Container class={styles.Lecture}>
      <div>
        <h2>Почва и садење</h2>
        <div style={{ "text-align": "left" }}>
          <p>
            Орхидеите во природата растат приврзани за кора на дрвата. Поради
            тоа најсоодветно е да се посади орхидеата во кора од дрво, но може и
            да се прави микс со кора од дрво, кокосoви влакна, перлит и
            вермикулит за висока циркулација на воздухот на корењата. Друг исто
            така познат начин за садење орхидеи е во LECA глинени топчиња.
          </p>
          <p>
            Друг исто така познат начин за садење орхидеи е во LECA
            (lightweight, expanded clay aggregate) глинени топчиња. Лека
            топчињата впиваат вода многу и пополека ја испуштаат давајќи им на
            орхидеите доволно време за да бидат хидратирани без да се угушени од
            недостаток на кислород. Пред да се посади орхидеата во лека топчиња
            строго се препорачува лека топчињата да се исплакнат убаво со вода и
            да се остават да се киснат во вода 24 до 48 часа. Кога се сади со
            лека топчиња треба да се чува нивото на водата во саксијата 2-5 cm
            од дното на саксијата и корените никако да ја допираат водата, тие
            треба самите да си пораснат во водата.
          </p>
          <p>
            Најпрепорачлив вид на саксија за садење орхидеи е проѕирна пластична
            саксија со доволно дупки на дното и од страна за да се осигура добра
            циркулација на воздух и светлина за фотосинтеза и да се избегне
            гниење на коренот. Ставете орхидеи во проѕирна пластична саксија во
            поголеми убави керамички или глинени саксии за да ги балансирате
            тешките орхидеи кои можат лесно да се соборат и за полесно полевање.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default LectureOrchidSoil;
