import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {{ pascalCase name }} from "./index";

export default {
  title: "Components/{{ pascalCase name }}",
  component: {{ pascalCase name }},
} as ComponentMeta<typeof {{ pascalCase name }}>;

const Template: ComponentStory<typeof {{ pascalCase name }}> = (args) => (
  <{{ pascalCase name }} {...args} />
);

export const Example = Template.bind({});