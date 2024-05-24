import { Meta, StoryObj } from "@storybook/react"
import { TablePagination as BaseTablePagination } from "."

export default {
  title: "Components/Table",
  component: BaseTablePagination,
  args: {
    count: 30,
    page: 1,
    rowsPerPage: 3,
  },
} as Meta<typeof BaseTablePagination>

export const TablePagination: StoryObj = {
  args: {}
}
