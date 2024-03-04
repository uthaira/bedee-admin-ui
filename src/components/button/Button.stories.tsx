import { Meta, StoryFn } from "@storybook/react";
import Button from "./BaseBtn";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import OutlinedBtn from "./OutlinedBtn";
import RemoveBtn from "./RemoveBtn";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    bdSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    }
  }
} as Meta<typeof Button>

const BaseTemplate: StoryFn<typeof Button> = (args) => <Button {...args} />;
export const Base = BaseTemplate.bind({})
Base.args = {
  bdType: "primary",
  bdSize: "lg",
  text: "Button",
  disabled: false,
  loading: false,
};

const PrimaryTemplate: StoryFn<typeof PrimaryBtn> = (args) => <PrimaryBtn {...args} />;
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  bdSize: "lg",
  text: "Button",
  disabled: false,
  loading: false,
};

const SecondaryTemplate: StoryFn<typeof SecondaryBtn> = (args) => <SecondaryBtn {...args} />;
export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  bdSize: "lg",
  text: "Button",
  disabled: false,
  loading: false,
}

const OutlinedTemplate: StoryFn<typeof OutlinedBtn> = (args) => <OutlinedBtn {...args} />;
export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  bdSize: "lg",
  text: "Button",
  disabled: false,
  loading: false,
}

const RemoveTemplate: StoryFn<typeof RemoveBtn> = (args) => <RemoveBtn {...args} />;
export const Remove = RemoveTemplate.bind({});
Remove.args = {
  bdSize: "lg",
  text: "Button",
  disabled: false,
  loading: false,
}