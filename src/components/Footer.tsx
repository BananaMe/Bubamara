import { Container } from "solid-bootstrap";
import { Component } from "solid-js";

export interface FooterProps {
  onButtonClick: (page: string) => void;
}

const Footer: Component<FooterProps> = (props) => {
  const { onButtonClick } = props;

  return (
    <Container>
      <footer
        class="text-center text-lg-start"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          "background-color": "#f2f2f2",
          float: "none",
          width: "100%",
        }}
      >
        <div class="container d-flex justify-content-center pb-2">
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButtonClick("home")}
          >
            Дома
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButtonClick("lecture")}
          >
            Курсеви
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButtonClick("quiz")}
          >
            Тестови
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButtonClick("diary")}
          >
            Дневник
          </button>
        </div>

        <div
          class="text-center text-white p-3"
          style={{
            "background-color": "rgba(0, 0, 0, 0.2)",
          }}
        >
          © 2022 Copyright:
          <a class="text-white">
            Бубамара
          </a>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
