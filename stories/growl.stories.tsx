import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { Growl } from "../src";

storiesOf("Growl", module).add("Default", () => (
  <ThemeProvider theme={DefaultTheme}></ThemeProvider>
));
