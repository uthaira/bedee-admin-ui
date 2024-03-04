import { Meta, StoryObj } from "@storybook/react";
import Switch from "./BaseSwitch";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<typeof Switch>

type Story = StoryObj<typeof Switch>;

export const BaseSwitch: Story = {
  args: {
    checked: false,
    bdSize: 'md',
  }
}