import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { DefaultTheme } from "../src/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={DefaultTheme}>{story()}</ThemeProvider>
));

const req = require.context("../stories", true, /\.stories\.(tsx|mdx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
