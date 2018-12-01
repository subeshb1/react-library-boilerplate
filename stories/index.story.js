import React from "react";
import { storiesOf, addDecorator, setAddon } from "@storybook/react";
import { Carousel, CarouselState } from "../src";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
setAddon(JSXAddon);

addDecorator(withKnobs);
storiesOf("First", module)
.addWithJSX("First Story", () => {
    return <div>FIrst</div>
});