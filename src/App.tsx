import { Component, createSignal, createEffect, Switch, Match } from "solid-js";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import Card from "./components/Cards";
import { Col, Container, Row } from "solid-bootstrap";
import Lecture from "./components/Lecture";
import DiaryBasic from "./components/DiaryBasic";
import DiaryImage from "./components/DiaryImage";
import { supabase } from "./supabaseClient";
import { AuthSession } from "@supabase/supabase-js";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";

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

  const [x, setX] = createSignal("login");

  return (
    <>
      <div class={styles.App}>
        <Switch fallback={<p>Има некоја грешка!</p>}>
          <Match when={x() == "login"}>
            <div class="container" style={{ padding: "50px 0 100px 0" }}>
              {!session() ? (
                <Auth />
              ) : (
                <Account session={session()!} onSave={setX} />
              )}
            </div>
          </Match>

          <Match when={x() == "home"}>
            <Navigation onButton={setX} />
            <img src={logo} class={styles.logo} alt="logo" />
            <Container class={styles.App}>
              <Row class="justify-content-around">
                <Card
                  title="Почва"
                  subtitle="Почетен курс"
                  text="почетен курс за проучување на почва"
                  onButton={setX}
                />
                <Card
                  title="Орхидеа"
                  subtitle="Почетен курс"
                  text="почетен курс за чување орхидеи"
                  onButton={setX}
                />
                <Card
                  title="Светлина"
                  subtitle="Почетен курс"
                  text="почетен курс за светлина учење"
                  onButton={setX}
                />
              </Row>
              <br></br>
            </Container>
          </Match>

          <Match when={x() == "lecture"}>
            <Navigation onButton={setX} />
            <Lecture />
          </Match>

          <Match when={x() == "quiz"}>
            <Quiz />
          </Match>

          <Match when={x() == "diary"}>
            <Navigation onButton={setX} />
            <DiaryBasic session={session()!} />
            <DiaryImage />
          </Match>
        </Switch>
      </div>
      <Footer onButton={setX} />
    </>
  );
};

export default App;
