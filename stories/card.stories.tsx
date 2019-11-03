import React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "../src";

storiesOf("Default", module)
  .add("Default", () => (
    <Card heading="Card Heading">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English.{" "}
    </Card>
  ))
  .add("Center", () => (
    <Card heading="Card Heading" align="center">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English.{" "}
    </Card>
  ));
