import { Component, createSignal, createEffect, Switch, Match } from "solid-js";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import Card from "./components/Cards";
import { Col, Container, Row } from "solid-bootstrap";
import Lecture from "./components/Lecture";
import DiaryBasic from "./components/DiaryBasic";
// import DiaryImage from "./components/DiaryImage";
import { supabase } from "./supabaseClient";
import { AuthSession } from "@supabase/supabase-js";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Quiz from "./components/QuizOrchid";

const App: Component = (props) => {
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
        <Switch fallback={<p>Има некоја грешка!</p>}>
          <Match when={page() == "login"}>
            <div class="container" style={{ padding: "50px 0 100px 0" }}>
              {!session() ? (
                <Auth />
              ) : (
                <Account session={session()!} onSave={setPage} />
              )}
            </div>
          </Match>

          <Match when={page() == "home"}>
            <Navigation onButton={setPage} />
            <img src={logo} class={styles.logo} alt="logo" />
            <Container class={styles.App}>
              <Row class="justify-content-around">
                <Card
                  title="Почва"
                  subtitle="Почетен курс"
                  text="почетен курс за проучување на почва"
                  onButton={setPage}
                  buttonText="Линк до курсот"
                />
                <Card
                  title="Орхидеа"
                  subtitle="Почетен курс"
                  text="почетен курс за чување орхидеи"
                  onButton={setPage}
                  buttonText="Линк до курсот"
                />
                <Card
                  title="Светлина"
                  subtitle="Почетен курс"
                  text="почетен курс за светлина учење"
                  onButton={setPage}
                  buttonText="Линк до курсот"
                />
              </Row>
            </Container>
            <Footer onButton={setPage} />
          </Match>

          <Match when={page() == "quiz"}>
            <Navigation onButton={setPage} />
            <Container class={styles.App}>
              <Row class="justify-content-around">
                <Card
                  title="Почва"
                  subtitle="Тест"
                  text="Тест на знаење за почетниот курс „Почва“"
                  onButton={() => setPage("quizOrchid")}
                  buttonText="Линк до тестот"
                />
                <Card
                  title="Орхидеа"
                  subtitle="Тест"
                  text="Тест на знаење за почетниот курс „Орхидеи“"
                  onButton={() => setPage("quizOrchid")}
                  buttonText="Линк до тестот"
                />
                <Card
                  title="Светлина"
                  subtitle="Тест"
                  text="Тест на знаење за почетниот курс „Светлина“"
                  onButton={() => setPage("quizOrchid")}
                  buttonText="Линк до тестот"
                />
              </Row>
            </Container>
            <Footer onButton={setPage} />
          </Match>

          <Match when={page() == "lecture"}>
            <Navigation onButton={setPage} />
            <Lecture />
            <Footer onButton={setPage} />
          </Match>

          <Match when={page() == "quizOrchid"}>
            <Navigation onButton={setPage} />
            <Quiz />
            <Footer onButton={setPage} />
          </Match>

          <Match when={page() == "diary"}>
            <Navigation onButton={setPage} />
            <DiaryBasic session={session()!} />
            {/* <DiaryImage /> */}
            <Footer onButton={setPage} />
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default App;
