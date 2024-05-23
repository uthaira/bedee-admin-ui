import type { TableRowProps } from "@mui/material/TableRow"
import type { TableCellProps } from "@mui/material/TableCell"
import type { FC, ReactNode } from "react"
import { TableBodyProps, TableContainerProps, TableHeadProps, TableProps } from "@mui/material"

export const ROW_CELL_TYPE_BASE = 'base'
export const ROW_CELL_TYPE_CUSTOM = 'custom'

export type DefaultDataType = Record<PropertyKey, any>

export type TableBodyRowCellType<DataType extends DefaultDataType = DefaultDataType> = {
  cellProps?: TableCellProps;
} & ({
  type: typeof ROW_CELL_TYPE_CUSTOM;
  cellContent: FC<Record<string, any> & { data: DataType; rowIndex: number; columnIndex: number }>;
} | {
  type?: typeof ROW_CELL_TYPE_BASE;
})

export type ColumnType<DataType extends DefaultDataType = DefaultDataType> = {
  key: string;
  bodyRowCell?: TableBodyRowCellType<DataType>;
  cellContent: ReactNode;
  cellProps?: TableCellProps;
}

export type BaseTableProps<DataType extends DefaultDataType = DefaultDataType> = {
  className?: string;
  rows: DataType[];
  columns: ColumnType<DataType>[];
  containerProps?: TableContainerProps;
  tableProps?: TableProps;
  headProps?: TableHeadProps;
  headRowProps?: TableRowProps;
  bodyProps?: TableBodyProps;
  bodyRowProps?: TableRowProps;
  rowKeyName?: keyof DataType;
}
