import React from "react";
import Direction from "./Direction";
export default {
  title: "Icons",
  component: Direction,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Direction {...args} />;

export const SVG = Template.bind({});
