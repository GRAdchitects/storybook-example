import React from "react";
import DivWithBackground from "./DivWithBackground";
export default {
  title: "Components/DivWithBackground",
  component: DivWithBackground,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DivWithBackground {...args} />;

export const Div = Template.bind({});

Div.args = {
  backgroundColor: "#fff",
};

// Div.parameters = {
//   backgrounds: {
//     default: "red",
//     values: [
//       { name: "red", value: "#f00" },
//       { name: "green", value: "#0f0" },
//       { name: "blue", value: "#00f" },
//     ],
//   },
// };
