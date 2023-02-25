import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GravityObject from "./index";

export default {
  title: "Components/GravityObject",
  component: GravityObject,
} as ComponentMeta<typeof GravityObject>;

const Template: ComponentStory<typeof GravityObject> = (args) => (
  <GravityObject {...args} />
);

export const Example = Template.bind({});