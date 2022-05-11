import React from "react";
import Title from "./Title";
export default {
  title: "Components/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>{args.title}</Title>;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};
