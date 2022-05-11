import "../assets/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <div style={{ padding: "30px", textDecoration: "underline" }}>
//       <Story />
//     </div>
//   ),
// ];

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme="default">
//       <Story />
//     </ThemeProvider>
//   ),
// ];
