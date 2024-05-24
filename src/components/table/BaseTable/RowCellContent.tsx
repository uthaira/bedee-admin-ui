import { ColumnType, DefaultDataType, ROW_CELL_TYPE_CUSTOM } from "./constants";

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

export default RowCellContent
