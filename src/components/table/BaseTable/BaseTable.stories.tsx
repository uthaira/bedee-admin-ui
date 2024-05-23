import { Meta, StoryObj } from "@storybook/react";
import { Table } from "..";
import { BASE_TABLE_PROPS } from "../../../sample/table/data";

export default {
  title: "Components/Table",
  component: Table,
  args: BASE_TABLE_PROPS,
} as Meta<typeof Table<any>>

export const BaseTable: StoryObj = {
  args: BASE_TABLE_PROPS
}
