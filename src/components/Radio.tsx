import { Component } from "solid-js";

export interface RadioProps {
  name: string;
  value: string;
  label?: string;
  id: string;
}
const Radio: Component<RadioProps> = (props) => {
  const { name, value, label, id } = props;

  return (
    <div
      style={{
        flex: "block",
        "margin-left": "50px",
        "text-align": "start",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        style={{
          "margin-right": "0.5rem",
        }}
      ></input>
      <label for={id}>{label}</label>
    </div>
  );
};
export default Radio;
