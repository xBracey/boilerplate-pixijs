import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Player from "./index";

export default {
  title: "Components/Player",
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => (
  <Player {...args} />
);

export const Example = Template.bind({});