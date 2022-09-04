import { createForm } from "@felte/solid";
import { Component, createSignal } from "solid-js";
import data from "../Quiz.json";
import RadioGroup from "./RadioGroup";

const Quiz: Component = () => {
  const [questionNo, setQuestionNo] = createSignal(0);
  const [score, setScore] = createSignal(0);
  const getQuestion = () =>
    data.questions[Math.min(data.questions.length - 1, questionNo())];
  const getQuestions = () => [
    getQuestion().correct,
    ...getQuestion().incorrect,
  ];

  const { form } = createForm({
    onSubmit: (values) => {
      console.log(values["quiz-answers"]);
      if (values["quiz-answers"] === getQuestion().correct) {
        setScore(score() + 1);
      }
      setQuestionNo(questionNo() + 1);
    },
  });

  return (
    <>
      <h3>Score: {score()}</h3>
      <div>
        <h3>{getQuestion().text}</h3>
        <form ref={form}>
          <RadioGroup data={getQuestions()} name="quiz-answers" />
          <button type="submit">Next question</button>
        </form>
      </div>
    </>
  );
};

export default Quiz;
