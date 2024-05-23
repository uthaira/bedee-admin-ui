import MuiTableContainer from "@mui/material/TableContainer"
import MuiTable from "@mui/material/Table"
import MuiTableHead from "@mui/material/TableHead"
import MuiTableRow from "@mui/material/TableRow"
import MuiTableCell from "@mui/material/TableCell"
import MuiTableBody from "@mui/material/TableBody"
import { BaseTableProps, ColumnType, DefaultDataType, ROW_CELL_TYPE_CUSTOM } from "./constants"
import { styled } from "@mui/material"
import { Colors } from "../../../colors"

const RowCellContent = <DataType extends DefaultDataType = DefaultDataType>(props: { column: ColumnType; row: DataType; rowIndex: number; columnIndex: number; }) => {
  const { column, row, rowIndex, columnIndex } = props
  const { bodyRowCell } = column

  if (bodyRowCell?.type === ROW_CELL_TYPE_CUSTOM) {
    const { cellContent: Content } = bodyRowCell
    return (
      <Content data={row} rowIndex={rowIndex} columnIndex={columnIndex} />
    )
  }

  return (
    <>
      {row[column.key] ?? ""}
    </>
  )
}

export const BaseTable = <DataType extends DefaultDataType = DefaultDataType>(props: BaseTableProps<DataType>) => {
  const {
    className,
    rows = [],
    columns = [],
    containerProps = {},
    tableProps = {},
    headProps = {},
    headRowProps = {},
    bodyProps = {},
    bodyRowProps = {},
    rowKeyName,
  } = props
  return (
    <StyledTableContainer className={className} {...containerProps}>
      <MuiTable {...tableProps}>
        <MuiTableHead {...headProps}>
          <MuiTableRow {...headRowProps}>
            {columns.map(({ key, cellProps = {}, cellContent }) => (
              <StyledTableHeadRowCell key={key} {...cellProps}>
                {cellContent}
              </StyledTableHeadRowCell>
            ))}
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody {...bodyProps}>
          {rows.map((row, rowIndex) => {
            const rowKey = (rowKeyName && row[rowKeyName]) ? row[rowKeyName] : rowIndex;
            return (
              <StyledTableBodyRow key={rowKey} {...bodyRowProps}>
                {columns.map((column, columnIndex) => {
                  const { key, bodyRowCell = {} } = column
                  const { cellProps = {} } = bodyRowCell
                  const columnKey = `${rowKey}_${key}`
                  return (
                    <StyledTableBodyRowCell key={columnKey} {...cellProps}>
                      <RowCellContent column={column} row={row} columnIndex={columnIndex} rowIndex={rowIndex} />
                    </StyledTableBodyRowCell>
                  );
                })}
              </StyledTableBodyRow>
            )
          })}
        </MuiTableBody>
      </MuiTable>
    </StyledTableContainer>
  )
}

const StyledTableContainer = styled(MuiTableContainer)({
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
})

const StyledTableHeadRowCell = styled(MuiTableCell)({
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  color: Colors.gray6,
  backgroundColor: Colors.gray2,
  padding: "8px",
  border: "none",
})

const StyledTableBodyRow = styled(MuiTableRow)({
  backgroundColor: Colors.white,
  borderBottom: `1px solid ${Colors.gray2}`,
  verticalAlign: 'top',
})

const StyledTableBodyRowCell = styled(MuiTableCell)({
  border: "none",
  color: Colors.gray6,
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  padding: "8px",
})
