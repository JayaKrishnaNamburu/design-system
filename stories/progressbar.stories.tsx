import React from "react";
import { storiesOf } from "@storybook/react";
import { ProgressBar } from "../src";

const progress = Math.random() * 10;

storiesOf("ProgressBar", module)
  .add("Regular", () => (
    <ProgressBar progress={progress} animate label="Progress" />
  ))
  .add("Small", () => (
    <ProgressBar progress={progress} size="small" label="Progress" />
  ));
