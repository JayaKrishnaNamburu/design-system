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
      <Toggle callback={testfunc}>Display Mode</Toggle>
    </ThemeProvider>
  ))
  .add("Default - Checked", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Toggle callback={testfunc} checked>
        Display Mode
      </Toggle>
    </ThemeProvider>
  ));
