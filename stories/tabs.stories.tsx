import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { Tabs } from "../src";

storiesOf("Tabs", module).add("Default", () => (
  <ThemeProvider theme={DefaultTheme}>
    <Tabs
      change={selected => console.log(selected)}
      menuItems={[{ id: 1, value: "Home" }, { id: 2, value: "About" }]}
    />
  </ThemeProvider>
));
