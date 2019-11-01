import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { Toggle } from "../src";

const testfunc = status => {
  console.log(status, "status from toggle");
};

storiesOf("Toggle", module)
  .add("Default", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Toggle callback={testfunc} />
    </ThemeProvider>
  ))
  .add("Dark", () => (
    <ThemeProvider theme={DarkTheme}>
      <Toggle callback={testfunc} />
    </ThemeProvider>
  ))
  .add("Custom", () => (
    <ThemeProvider theme={CustomTheme}>
      <Toggle callback={testfunc} />
    </ThemeProvider>
  ))
  .add("Default - Checked", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Toggle callback={testfunc} checked />
    </ThemeProvider>
  ))
  .add("Dark - Checked", () => (
    <ThemeProvider theme={DarkTheme}>
      <Toggle callback={testfunc} checked />
    </ThemeProvider>
  ))
  .add("Custom - Checked", () => (
    <ThemeProvider theme={CustomTheme}>
      <Toggle callback={testfunc} checked />
    </ThemeProvider>
  ));
