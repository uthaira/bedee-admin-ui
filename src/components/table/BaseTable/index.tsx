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
      {rowData[column.key] ?? ""}
    </>
  );
};

export const BaseTable = <DataType extends DefaultDataType = DefaultDataType>(props: BaseTableProps<DataType>) => {
  return (
    <StyledTableContainer className={props.className} {...props.tableContainerProps ?? {}}>
      <MaterialTable {...props.tableProps ?? {}}>
        <MaterialTableHead {...props.tableHeadProps ?? {}}>
          <MaterialTableRow {...props.tableHeadRowProps ?? {}}>
            {props.columns.map((column) => (
              <StyledTableHeadRowCell key={column.key.toString()} {...column.tableHeadColumnCellProps ?? {}}>
                {column.tableHeadColumnCellRenderer}
              </StyledTableHeadRowCell>
            ))}
          </MaterialTableRow>
        </MaterialTableHead>
        <MaterialTableBody {...props.tableBodyProps ?? {}}>
          {props.dataSource.map((rowData, rowIndex) => {
            const rowKey = props.getTableBodyRowKey?.({ data: rowData, rowIndex }) ?? rowIndex;
            const additionalTableBodyRowProps = props.getTableBodyRowProps?.({ data: rowData, rowIndex }) ?? {};
            return (
              <StyledTableBodyRow key={rowKey} {...props.defaultTableBodyRowProps} {...additionalTableBodyRowProps}>
                {props.columns.map((column, columnIndex) => {
                  const columnKey = `${rowKey}_${column.key}`;
                  const additionalTableRowCellProps = column.tableBodyRowCell?.getTableBodyRowCellProps?.({ data: rowData, column, rowIndex, columnIndex }) ?? {};
                  return (
                    <StyledTableBodyRowCell key={columnKey} {...column.tableBodyRowCell?.defaultTableBodyRowCellProps ?? {}} {...additionalTableRowCellProps}>
                      <RowCellRenderer column={column} rowData={rowData} columnIndex={columnIndex} rowIndex={rowIndex} />
                    </StyledTableBodyRowCell>
                  );
                })}
              </StyledTableBodyRow>
            );
          })}
        </MaterialTableBody>
      </MaterialTable>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(MaterialTableContainer)({
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: Colors.gray2,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.gray3,
    borderRadius: "8px",
  }
});

const StyledTableHeadRowCell = styled(MaterialTableCell)({
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  color: Colors.gray6,
  backgroundColor: Colors.gray2,
  padding: "8px",
  border: "none",
});

const StyledTableBodyRow = styled(MaterialTableRow)({
  backgroundColor: Colors.white,
  borderBottom: `1px solid ${Colors.gray2}`,
  verticalAlign: 'top',
});

const StyledTableBodyRowCell = styled(MaterialTableCell)({
  border: "none",
  color: Colors.gray6,
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  padding: "8px",
});
