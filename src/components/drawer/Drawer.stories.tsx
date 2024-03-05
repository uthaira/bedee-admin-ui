import { Meta, StoryFn } from "@storybook/react";
import Drawer from ".";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta<typeof Drawer>

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />

export const LeftDrawer = Template.bind({})
LeftDrawer.args = {
  open: true,
  title: "Title",
  text: "Text",
  corner: "Corner",
  position: "left",
  width: 200,
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <div>content goes here</div>,
}

export const TopDrawer = Template.bind({})
TopDrawer.args = {
  open: true,
  title: "Title",
  text: "Text",
  corner: "Corner",
  position: "top",
  width: "100%",
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <div>content goes here</div>,
}

export const RightDrawer = Template.bind({})
RightDrawer.args = {
  open: true,
  title: "Title",
  text: "Text",
  corner: "Corner",
  position: "right",
  width: 200,
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <div>content goes here</div>,
}

export const BottomDrawer = Template.bind({})
BottomDrawer.args = {
  open: true,
  title: "Title",
  text: "Text",
  corner: "Corner",
  position: "top",
  width: "100%",
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <div>content goes here</div>,
}