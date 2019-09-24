import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { LighTheme, DarkTheme, BasicTheme } from "../src/theme";

import { Card } from "../src/components/Card";

storiesOf("Card", module)
  .add("Light Theme", () => (
    <ThemeProvider theme={LighTheme}>
      <Card heading="Card Heading" />
    </ThemeProvider>
  ))
  .add("Dark Theme", () => (
    <ThemeProvider theme={DarkTheme}>
      <Card heading="Card Heading" />
    </ThemeProvider>
  ))
  .add("Basic Theme", () => (
    <ThemeProvider theme={BasicTheme}>
      <Card heading="Card Heading" />
    </ThemeProvider>
  ));
