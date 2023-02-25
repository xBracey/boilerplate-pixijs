import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Board from "./index";

export default {
  title: "Components/Board",
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => (
  <Board {...args} />
);

export const Example = Template.bind({});