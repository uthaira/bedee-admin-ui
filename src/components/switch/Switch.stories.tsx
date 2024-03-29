import { Meta, StoryObj } from "@storybook/react";
import Switch from "./BaseSwitch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    bdSize: {
      control: { type: 'radio' },
      options: ['sm', 'md']
    }
  }
} as Meta<typeof Switch>

type SwitchStory = StoryObj<typeof Switch>;

export const BaseSwitch: SwitchStory = {
  args: {
    checked: false,
    bdSize: 'md',
    disabled: false
  }
}
