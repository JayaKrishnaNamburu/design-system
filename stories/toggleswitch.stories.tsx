import React from "react";
import { storiesOf } from "@storybook/react";
import { Toggle } from "../src";

const testfunc = status => {
  console.log(status, "status from toggle");
};

storiesOf("Toggle", module)
  .add("Default", () => <Toggle callback={testfunc}>Display Mode</Toggle>)
  .add("Default - Checked", () => (
    <Toggle callback={testfunc} checked>
      Display Mode
    </Toggle>
  ));
