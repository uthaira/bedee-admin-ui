import { Meta, StoryFn } from "@storybook/react";
import { Table } from "..";
import { BASE_TABLE_PROPS } from "../../../sample/table/data";

export default {
  title: "Components/Table",
  component: Table,
  args: BASE_TABLE_PROPS,
} as Meta<typeof Table>

const BaseTableTemplate: StoryFn<typeof Table> = (args) => <Table {...args} />;
export const BaseTable = BaseTableTemplate.bind({})
BaseTable.args = BASE_TABLE_PROPS;
