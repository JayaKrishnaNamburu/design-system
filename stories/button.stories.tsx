import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";

const test = () => {
  console.log("clicked");
};

storiesOf("Button", module)
  .add("Small", () => (
    <Button size="small" callback={test}>
      Small
    </Button>
  ))
  .add("Small Disabled", () => (
    <Button size="small" disabled callback={test}>
      Small
    </Button>
  ))
  .add("Small Flat", () => (
    <Button size="small" flatButton callback={test}>
      Small
    </Button>
  ))
  .add("Small Flat Disabled", () => (
    <Button size="small" flatButton disabled callback={test}>
      Small
    </Button>
  ))
  .add("Regular", () => <Button callback={test}>Small</Button>)
  .add("Regular Disabled", () => (
    <Button disabled callback={test}>
      Small
    </Button>
  ))
  .add("Regular Flat", () => (
    <Button flatButton callback={test}>
      Small
    </Button>
  ))
  .add("Regular Flat Disabled", () => (
    <Button flatButton disabled callback={test}>
      Small
    </Button>
  ));
