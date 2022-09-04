import { Component, For } from "solid-js";
import Radio from "./Radio";

export interface RadioGroupProps {
  data: any;
  name: string;
}
const RadioGroup: Component<RadioGroupProps> = (props) => {
  const { name } = props;

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <For each={props.data}>
        {(element: string, index) => (
          <Radio
            name={name}
            value={element}
            label={element}
            id={`${name}-${index()}`}
          />
        )}
      </For>
    </div>
  );
};
export default RadioGroup;
