import { Meta, StoryObj } from "@storybook/react";
import SwitchLB from "./SwitchLabel";

export default {
  title: "Components/Switch",
  component: SwitchLB,
  argTypes: {
    bdSize: {
      control: { type: 'radio' },
      options: ['sm', 'md']
    }
  }
} as Meta<typeof SwitchLB>

type SwitchLabelStory = StoryObj<typeof SwitchLB>

export const SwitchLabel: SwitchLabelStory = {
  args: {
    checked: false,
    bdSize: 'md',
    disabled: false,
    label: "Option",
    hint: "hint"
  }
}