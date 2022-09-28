import { createForm } from "@felte/solid";
import _ from "lodash";
import { Button } from "solid-bootstrap";
import { Component, createSignal, Show } from "solid-js";
import data from "../QuizOrchid.json";
import QuizResults from "./QuizResults";
import RadioGroup from "./RadioGroup";

const questions = _.shuffle(data.questions);

const QuizOrchid: Component = () => {
  const [questionNo, setQuestionNo] = createSignal(0);
  const [score, setScore] = createSignal(0);
  const [info, setInfo] = createSignal<string | undefined>();
  const getQuestion = () =>
    questions[Math.min(questions.length - 1, questionNo())];
  const getChoices = () =>
    _.shuffle([getQuestion().correct, ...getQuestion().incorrect]);

  const { form } = createForm({
    onSubmit: (values) => {
      if (!values["quiz-answers"]) {
        setInfo("Селектирајте одговор!");
        return;
      }
      setInfo();
      if (values["quiz-answers"] === getQuestion().correct) {
        setScore(score() + 1);
      }
      setQuestionNo(questionNo() + 1);
    },
  });

  const reset = () => {
    setQuestionNo(0);
    setScore(0);
    setInfo();
  };

  return (
    <div style={{ "padding-top": "1rem" }}>
      <Show
        when={questionNo() < questions.length}
        fallback={
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            reset={reset}
          />
        }
      >
        <div
          style={{
            display: "block",
            width: "60%",
            "border-style": "dashed",
            margin: "auto",
          }}
        >
          <h2
            style={{
              "margin-left": "2rem",
              "padding-top": "1rem",
              "text-align": "start",
              "font-size": "1.25rem",
              color: "#808080",
            }}
          >
            Прашање {questionNo()} од {questions.length}
          </h2>
          <h3
            style={{
              "margin-left": "20px",
              "text-align": "start",
            }}
          >
            {getQuestion().text}
          </h3>
          <form ref={form}>
            <RadioGroup data={getChoices()} name="quiz-answers" />
            <p style={{ color: "red", margin: 0, "font-weight": 500 }}>
              {info()}
            </p>
            <Button
              type="submit"
              variant="outline-light"
              style={{
                "background-color": "#78b389",
                margin: "1rem",
                "font-size": "1.5rem",
              }}
            >
              Следно прашање
            </Button>
          </form>
        </div>
      </Show>
    </div>
  );
};

export default QuizOrchid;
