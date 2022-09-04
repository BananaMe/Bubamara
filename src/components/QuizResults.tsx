import { Button } from "solid-bootstrap";
import { Component, Show } from "solid-js";

interface QuizResultsProps {
  score: () => number;
  totalQuestions: number;
  reset: () => void;
}

const FormattedText: Component<{ children: any }> = (props) => {
  return (
    <p style={{ margin: 0, "padding-top": "0.5rem", "font-size": "1.25rem" }}>
      {props.children}
    </p>
  );
};

const QuizResults: Component<QuizResultsProps> = (props) => {
  const { score, totalQuestions, reset } = props;
  return (
    <div
      style={{
        display: "block",
      }}
    >
      <h3
        style={{
          "margin-top": "2rem",
        }}
      >
        Добивте {score()} од {totalQuestions} поени.
      </h3>
      <Show
        when={score() < totalQuestions * 0.6}
        fallback={<FormattedText>Честито, положивте!</FormattedText>}
      >
        <FormattedText>
          Ви требаат минимум 60% од поените за да положите.
        </FormattedText>
      </Show>
      <Button
        type="submit"
        variant="outline-light"
        style={{
          "background-color": "#78b389",
          margin: "1rem",
          "margin-top": "4rem",
          "font-size": "1.5rem",
        }}
        onClick={() => reset()}
      >
        Обидете се повторно.
      </Button>
    </div>
  );
};
export default QuizResults;
