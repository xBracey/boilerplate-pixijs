import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Bunny from "./index";

export default {
  title: "Components/Bunny",
  component: Bunny,
} as ComponentMeta<typeof Bunny>;

const Template: ComponentStory<typeof Bunny> = (args) => (
  <Bunny {...args} />
);

export const Example = Template.bind({});