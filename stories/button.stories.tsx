import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";

import { Button } from "../src";

storiesOf("Button Default Theme", module)
  .add("Small", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small">Small</Button>
    </ThemeProvider>
  ))
  .add("Small Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" disabled>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Small Flat", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" flatButton>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Small Flat Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" flatButton disabled>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Regular", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button>Small</Button>
    </ThemeProvider>
  ))
  .add("Regular Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button disabled>Small</Button>
    </ThemeProvider>
  ))
  .add("Regular Flat", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button flatButton>Small</Button>
    </ThemeProvider>
  ))
  .add("Regular Flat Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button flatButton disabled>
        Small
      </Button>
    </ThemeProvider>
  ));