import type { TableRowProps } from "@mui/material/TableRow";
import type { TableCellProps } from "@mui/material/TableCell";
import type { FC, ReactNode } from "react";
import { TableBodyProps, TableContainerProps, TableHeadProps, TableProps } from "@mui/material";

export const ROW_CELL_TYPE_BASE = 'base';
export const ROW_CELL_TYPE_CUSTOM = 'custom';

export type DefaultDataType = Record<PropertyKey, any>;

export type TableBodyRowCellType<DataType extends DefaultDataType = DefaultDataType> = {
  defaultTableBodyRowCellProps?: TableCellProps;
  getTableBodyRowCellProps?: (params: { data: DataType; rowIndex: number; column: ColumnType<DataType>; columnIndex: number }) => TableCellProps;
} & ({
  type: typeof ROW_CELL_TYPE_CUSTOM;
  render: FC<Record<string, any> & { data: DataType; rowIndex: number; columnIndex: number }>;
} | {
  type?: typeof ROW_CELL_TYPE_BASE;
});

export type ColumnType<DataType extends DefaultDataType = DefaultDataType> = {
  key: string;
  tableBodyRowCell?: TableBodyRowCellType<DataType>;
  tableHeadColumnCellRenderer: ReactNode;
  tableHeadColumnCellProps?: TableCellProps;
};

export type BaseTableProps<DataType extends DefaultDataType = DefaultDataType> = {
  className?: string;
  dataSource: DataType[];
  columns: ColumnType<DataType>[];
  tableContainerProps?: TableContainerProps;
  tableProps?: TableProps;
  tableHeadProps?: TableHeadProps;
  tableHeadRowProps?: TableRowProps;
  tableBodyProps?: TableBodyProps;
  defaultTableBodyRowProps?: TableRowProps;
  getTableBodyRowKey?: (params: { data: DataType; rowIndex: number }) => string;
  getTableBodyRowProps?: (params: { data: DataType; rowIndex: number }) => TableRowProps;
};
