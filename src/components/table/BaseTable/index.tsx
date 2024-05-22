import { isValidElement } from "react";
import MaterialTableContainer from "@mui/material/TableContainer";
import MaterialTable from "@mui/material/Table";
import MaterialTableHead from "@mui/material/TableHead";
import MaterialTableRow from "@mui/material/TableRow";
import MaterialTableCell from "@mui/material/TableCell";
import MaterialTableBody from "@mui/material/TableBody";
import { BaseTableProps, ColumnType, DefaultDataType, ROW_CELL_TYPE_CUSTOM } from "./constants";
import { styled } from "@mui/material";
import { Colors } from "../../../colors";

const RowCellRenderer = <DataType extends DefaultDataType = DefaultDataType>(props: { column: ColumnType; rowData: DataType; rowIndex: number; columnIndex: number; }) => {
  const { column, rowData, rowIndex, columnIndex } = props;
  const { tableBodyRowCell } = column;

  if (tableBodyRowCell?.type === ROW_CELL_TYPE_CUSTOM) {
    const { render: Renderer } = tableBodyRowCell;
    return (
      <Renderer data={rowData} rowIndex={rowIndex} columnIndex={columnIndex} />
    );
  }

  return (
    <>
      {rowData[column.key] ?? ''}
    </>
  );
};

export const BaseTable = <DataType extends DefaultDataType = DefaultDataType>(props: BaseTableProps<DataType>) => {
  return (
    <TableContainer className={props.className} {...props.tableContainerProps ?? {}}>
      <MaterialTable {...props.tableProps ?? {}}>
        <MaterialTableHead {...props.tableHeadProps ?? {}}>
          <TableHeadRow {...props.tableHeadRowProps ?? {}}>
            {props.columns.map((column) => (
              <MaterialTableCell key={column.key.toString()} {...column.tableHeadColumnCellProps ?? {}}>
                {column.tableHeadColumnCellRenderer}
              </MaterialTableCell>
            ))}
          </TableHeadRow>
        </MaterialTableHead>
        <MaterialTableBody {...props.tableBodyProps ?? {}}>
          {props.dataSource.map((rowData, rowIndex) => {
            const rowKey = props.getTableBodyRowKey?.({ data: rowData, rowIndex }) ?? rowIndex;
            const additionalTableBodyRowProps = props.getTableBodyRowProps?.({ data: rowData, rowIndex }) ?? {};
            return (
              <TableBodyRow key={rowKey} {...props.defaultTableBodyRowProps} {...additionalTableBodyRowProps}>
                {props.columns.map((column, columnIndex) => {
                  const columnKey = `${rowKey}_${column.key}`;
                  const additionalTableRowCellProps = column.tableBodyRowCell?.getTableBodyRowCellProps?.({ data: rowData, column, rowIndex, columnIndex }) ?? {};
                  return (
                    <TableBodyRowCell key={columnKey} {...column.tableBodyRowCell?.defaultTableBodyRowCellProps ?? {}} {...additionalTableRowCellProps}>
                      <RowCellRenderer column={column} rowData={rowData} columnIndex={columnIndex} rowIndex={rowIndex} />
                    </TableBodyRowCell>
                  );
                })}
              </TableBodyRow>
            );
          })}
        </MaterialTableBody>
      </MaterialTable>
    </TableContainer>
  );
};

const TableContainer = styled(MaterialTableContainer)({
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: Colors.gray2,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: Colors.gray3,
    borderRadius: '8px',
  }
});

const TableHeadRow = styled(MaterialTableRow)({
  backgroundColor: Colors.gray2,
});

const TableBodyRow = styled(MaterialTableRow)({
  backgroundColor: Colors.white,
  borderBottom: `1px solid ${Colors.gray2}`,
});

const TableBodyRowCell = styled(MaterialTableCell)({
  border: 'none',
});
