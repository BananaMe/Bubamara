import { Container } from "solid-bootstrap";
import { Component } from "solid-js";

export interface FooterProps {
  onButton: (page: string) => void;
}

const Footer: Component<FooterProps> = (props) => {
  const { onButton } = props;

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
            onClick={() => onButton("home")}
          >
            Дома
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButton("lecture")}
          >
            Курсеви
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButton("quiz")}
          >
            Тестови
          </button>
          <button
            type="button"
            class="btn btn-secondary text-secondary btn-sm btn-floating mx-2"
            style={{
              "background-color": "#bbd9c4",
            }}
            onClick={() => onButton("diary")}
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
          <a class="text-white" href="">
            Бубамара
          </a>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
