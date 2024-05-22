import Paper from "@mui/material/Paper";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { useCallback } from "react";
import { TableFooter, TableFooterProps as UiTableFooterProps } from "./TableFooter";
import {
  TableNoRowsOverlay,
  TableNoRowsOverlayProps as UITableNoRowsOverlayProps,
} from "./TableNoRowsOverlay";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from '../../colors'

export type TableDataGridProps = {
  tableFooterProps?: UiTableFooterProps;
  tableHeight?: number | string;
  borderRadiusValue?: number;
  tableNoRowsOverlayProps?: UITableNoRowsOverlayProps;
} & DataGridProps;

const StyledDataGrid = styled(DataGrid)(() => ({
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: Colors.gray2,
    padding: "0px 12px",
    "&:focus": {
      outline: "none",
    },
    "&:focus-within": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-columnSeparator": {
    color: Colors.gray2,
  },
  "& .MuiDataGrid-cell": {
    padding: "12px",
    "&:focus": {
      outline: "none",
    },
    "&:focus-within": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-scrollbar.MuiDataGrid-scrollbar--vertical::-webkit-scrollbar": {
    width: "6px",
  },
  "& .MuiDataGrid-scrollbar.MuiDataGrid-scrollbar--horizontal::-webkit-scrollbar": {
    height: "6px",
  },
  "& .MuiDataGrid-scrollbar::-webkit-scrollbar-track": {
    background: Colors.gray2,
  },
  "& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.gray3,
    borderRadius: 8,
  },
  "& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb:hover": {
    background: Colors.gray4,
  },
}))

const TableDataGrid = (props: TableDataGridProps) => {
  const {
    tableFooterProps,
    tableHeight = "70vh",
    borderRadiusValue,
    tableNoRowsOverlayProps,
    slots,
    ...rest
  } = props

  const NoRowsOverlay = useCallback(() => {
    return <TableNoRowsOverlay {...tableNoRowsOverlayProps} />;
  }, [tableNoRowsOverlayProps]);

  return (
    <RootStyle spacing={2.5}>
      <Paper
        sx={{
          height: tableHeight,
          width: "100%",
          borderTopLeftRadius: borderRadiusValue,
          borderTopRightRadius: borderRadiusValue,
        }}
      >
        <StyledDataGrid
          rowHeight={72}
          columnHeaderHeight={56}
          disableColumnMenu
          disableDensitySelector
          disableColumnSelector
          showCellVerticalBorder={false}
          hideFooter
          slots={{
            noRowsOverlay: NoRowsOverlay,
            ...slots,
          }}
          {...rest}
        />
      </Paper>

      <TableFooter {...tableFooterProps} />
    </RootStyle>
  );
}

export default TableDataGrid

const RootStyle = styled(Stack)({
  height: "100%",
  width: "100%",
});