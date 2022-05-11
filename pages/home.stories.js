import React from "react";
import Home from "./index";
export default {
  title: "Pages",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
