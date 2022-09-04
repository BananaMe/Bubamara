import { Component } from "solid-js";

export interface RadioProps {
  name: string;
  value: string;
  label?: string;
  id: string;
}
const Radio: Component<RadioProps> = (props) => {
  const { name, value, label, id } = props;
  console.log(value);
  return (
    <div
      style={{
        flex: "block",
      }}
    >
      <input type="radio" name={name} value={value} id={id}></input>
      <label for={id}>{label}</label>
    </div>
  );
};
export default Radio;
