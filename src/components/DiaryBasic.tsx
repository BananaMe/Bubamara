import { AuthSession } from "@supabase/supabase-js";
import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import DiaryEntry from "./DiaryEntry";

interface DiaryProps {
    session: AuthSession;
}

const DiaryBasic: Component<DiaryProps> = ({session}) => {
  return (
    <Container>
      <DiaryEntry session={session} />
    </Container>
  );
};

export default DiaryBasic;
