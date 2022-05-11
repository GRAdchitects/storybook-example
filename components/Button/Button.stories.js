import React from "react";
import Button from "./Button";
export default {
  title: "Components/Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  primary: false,
};
