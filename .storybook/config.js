import { configure } from "@storybook/react";

const req = require.context("../stories", true, /\.stories\.(tsx|mdx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
