import { AuthSession } from "@supabase/supabase-js";
import { Container, Row } from "solid-bootstrap";
import {
  Component,
  createEffect,
  createSignal,
  Match,
  Show,
  Switch
} from "solid-js";
import styles from "./App.module.css";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Card from "./components/Cards";
import Diary from "./components/Diary";
import Footer from "./components/Footer";
import LectureOrchid from "./components/lectures/LectureOrchid";
import LectureSoil from "./components/lectures/LectureSoil";
import Navigation from "./components/Navigation";
import Quiz from "./components/Quiz";
import logo from "./logo.svg";
import QuizOrchid from './QuizOrchid.json';
import QuizSoil from './QuizSoil.json';
import { supabase } from "./supabaseClient";

const App: Component = () => {
  const [session, setSession] = createSignal<AuthSession | null>(null);

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  const [page, setPage] = createSignal("login");

  return (
    <>
      <div class={styles.App}>
        <Show
          when={session()}
          fallback={
            <div class="container" style={{ padding: "50px 0 100px 0" }}>
              <Auth />
            </div>
          }
        >
          <Show when={page() !== "login"}>
            <Navigation onButtonClick={setPage} />
          </Show>
          <Switch fallback={<p>Има некоја грешка!</p>}>
            <Match when={page() == "login"}>
              <div class="container" style={{ padding: "50px 0 100px 0" }}>
                <Account session={session()!} onSave={setPage} />
              </div>
            </Match>
            <Match when={page() == "home"}>
              <img src={logo} class={styles.logo} alt="logo" />
              <Container class={styles.App}>
                <Row class="justify-content-around">
                  <Card
                    title="Почва"
                    subtitle="Почетен курс"
                    text="почетен курс за проучување на почва"
                    onButtonClick={() => setPage("lectureSoil")}
                    buttonText="Линк до курсот"
                  />
                  <Card
                    title="Орхидеа"
                    subtitle="Почетен курс"
                    text="почетен курс за чување орхидеи"
                    onButtonClick={() => setPage("lectureOrchid")}
                    buttonText="Линк до курсот"
                  />
                  <Card
                    title="Светлина"
                    subtitle="Почетен курс"
                    text="почетен курс за светлина"
                    buttonText="Доаѓа наскоро..."
                  />
                </Row>
              </Container>
            </Match>
            <Match when={page() == "quiz"}>
              <Container class={styles.App}>
                <Row class="justify-content-around">
                  <Card
                    title="Почва"
                    subtitle="Тест"
                    text="Тест на знаење за почетниот курс „Почва“"
                    onButtonClick={() => setPage("quizSoil")}
                    buttonText="Линк до тестот"
                  />
                  <Card
                    title="Орхидеа"
                    subtitle="Тест"
                    text="Тест на знаење за почетниот курс „Орхидеи“"
                    onButtonClick={() => setPage("quizOrchid")}
                    buttonText="Линк до тестот"
                  />
                  <Card
                    title="Светлина"
                    subtitle="Тест"
                    text="Тест на знаење за почетниот курс „Светлина“"
                    onButtonClick={() => setPage("quizOrchid")}
                    buttonText="Линк до тестот"
                  />
                </Row>
              </Container>
            </Match>
            <Match when={page() == "lecture"}>
              <Container class={styles.App}>
                <Row class="justify-content-around">
                  <Card
                    title="Почва"
                    subtitle="Почетен курс"
                    text="почетен курс за проучување на почва"
                    onButtonClick={() => setPage("lectureSoil")}
                    buttonText="Линк до курсот"
                  />
                  <Card
                    title="Орхидеа"
                    subtitle="Почетен курс"
                    text="почетен курс за чување орхидеи"
                    onButtonClick={() => setPage("lectureOrchid")}
                    buttonText="Линк до курсот"
                  />
                  <Card
                    title="Светлина"
                    subtitle="Почетен курс"
                    text="почетен курс за светлина учење"
                    onButtonClick={() => setPage("lecture")}
                    buttonText="Линк до курсот"
                  />
                </Row>
              </Container>
            </Match>
            <Match when={page() == "lectureOrchid"}>
              <LectureOrchid />
            </Match>
            <Match when={page() == "lectureSoil"}>
              <LectureSoil />
            </Match>
            <Match when={page() == "quizOrchid"}>
              <Quiz questions={QuizOrchid.questions} />
            </Match>
            <Match when={page() == "quizSoil"}>
              <Quiz questions={QuizSoil.questions} />
            </Match>
            <Match when={page() == "diary"}>
              <Diary session={session()!} />
            </Match>
          </Switch>
          <Show when={page() !== "login"}>
            <Footer onButtonClick={setPage} />{" "}
          </Show>
        </Show>
      </div>
    </>
  );
};

export default App;
