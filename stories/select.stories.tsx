import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme, CustomTheme } from "../src/theme";
import { Select } from "../src";
import { OptionConfig } from "../src/types";

export const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" }
];

const additationalProps = {
  placeholder: "Place holder coming from additational prop"
};

storiesOf("Select", module)
  .add("Default", () => (
    <ThemeProvider theme={DefaultTheme}>
      <Select
        options={colourOptions}
        change={(value: OptionConfig) => console.log("selected", value)}
        isSearchable={false}
      />
    </ThemeProvider>
  ))
  .add("Custom", () => (
    <ThemeProvider theme={CustomTheme}>
      <Select
        options={colourOptions}
        change={(value: OptionConfig) => console.log("selected", value)}
        isSearchable
      />
    </ThemeProvider>
  ))
  .add("Dark", () => (
    <ThemeProvider theme={DarkTheme}>
      <Select
        customProps={additationalProps}
        options={colourOptions}
        change={(value: OptionConfig) => console.log("selected", value)}
        isSearchable
      />
    </ThemeProvider>
  ));
