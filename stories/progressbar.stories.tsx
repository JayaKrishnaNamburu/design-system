import React from "react";
import { storiesOf } from "@storybook/react";
import { ProgressBar } from "../src";

storiesOf("ProgressBar", module)
  .add("Regular", () => (
    <ProgressBar progress={50} animate label="Progress" />
  ))
  .add("Small", () => (
    <ProgressBar progress={70} size="small" label="Progress" />
  ));
