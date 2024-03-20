import { Meta, StoryFn } from "@storybook/react";
import { Drawer } from ".";
import { Typography } from "@mui/material";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta<typeof Drawer>

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />

export const LeftDrawer = Template.bind({})
LeftDrawer.args = {
  open: true,
  title: "Title",
  buttonText: "Text",
  corner: "Corner",
  position: "left",
  width: 200,
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <Typography>content goes here</Typography>,
}

export const TopDrawer = Template.bind({})
TopDrawer.args = {
  open: true,
  title: "Title",
  buttonText: "Text",
  corner: "Corner",
  position: "top",
  width: "98%",
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <Typography>content goes here</Typography>,
}

export const RightDrawer = Template.bind({})
RightDrawer.args = {
  open: true,
  title: "Title",
  buttonText: "Text",
  corner: "Corner",
  position: "right",
  width: 200,
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <Typography>content goes here</Typography>,
}

export const BottomDrawer = Template.bind({})
BottomDrawer.args = {
  open: true,
  title: "Title",
  buttonText: "Text",
  corner: "Corner",
  position: "top",
  width: "100%",
  onClose: () => console.log('close'),
  onClick: () => console.log('click'),
  onCorner: () => console.log('corner'),
  children: <Typography>content goes here</Typography>,
}