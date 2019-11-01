import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../src/theme";
import { Button } from "../src";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

const test = () => {
  console.log("clicked");
};

storiesOf("Button Default Theme", module)
  .add("Small", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Small Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" disabled callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Small Flat", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" flatButton callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Small Flat Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button size="small" flatButton disabled callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Regular", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button callback={test}>Small</Button>
    </ThemeProvider>
  ))
  .add("Regular Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button disabled callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Regular Flat", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button flatButton callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ))
  .add("Regular Flat Disabled", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Button flatButton disabled callback={test}>
        Small
      </Button>
    </ThemeProvider>
  ));
