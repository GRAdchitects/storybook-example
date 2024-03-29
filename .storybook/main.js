module.exports = {
  stories: ["../*/**/*.stories.mdx", "../*/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};
