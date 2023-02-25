import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PhysicsObject from "./index";

export default {
  title: "Components/PhysicsObject",
  component: PhysicsObject,
} as ComponentMeta<typeof PhysicsObject>;

const Template: ComponentStory<typeof PhysicsObject> = (args) => (
  <PhysicsObject {...args} />
);

export const Example = Template.bind({});