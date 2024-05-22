import { Meta, StoryObj } from "@storybook/react";
import TableDataGrid from "./TableDataGrid";
import { columns, rows } from "../../sample/table/data";

export default {
  title: "Components/Table",
  component: TableDataGrid,
} as Meta<typeof TableDataGrid>

type TableDataGridStory = StoryObj<typeof TableDataGrid>;

export const DataGrid: TableDataGridStory = {
  args: {
    columns,
    rows,
    loading: false,
    tableFooterProps: {
      limit: 10,
      offset: 0,
      total: 30,
    },
    getRowId: (row: any) => row.id
  }
}
