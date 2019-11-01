import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { Card } from "../src";

storiesOf("Default Card", module)
  .add("Default", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Card heading="Card Heading">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.{" "}
      </Card>
    </ThemeProvider>
  ))
  .add("Default Center", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Card heading="Card Heading" align="center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.{" "}
      </Card>
    </ThemeProvider>
  ));

storiesOf("Dark Theme Card", module)
  .add("Default", () => (
    <ThemeProvider theme={DarkTheme}>
      <Card heading="Card Heading">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.{" "}
      </Card>
    </ThemeProvider>
  ))
  .add("Default Center", () => (
    <ThemeProvider theme={DarkTheme}>
      <Card heading="Card Heading" align="center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.{" "}
      </Card>
    </ThemeProvider>
  ));
