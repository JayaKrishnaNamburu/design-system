import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { ProgressBar } from "../src";

const progress = Math.random() * 10;

storiesOf("Default ProgressBar", module)
  .add("Regular", () => (
    <ThemeProvider theme={DefaultTheme}>
      <ProgressBar progress={progress} animate label="Progress" />
    </ThemeProvider>
  ))
  .add("Small", () => (
    <ThemeProvider theme={DefaultTheme}>
      <ProgressBar progress={progress} size="small" label="Progress" />
    </ThemeProvider>
  ));
