import styled from "@emotion/styled";
import MaterialTablePagination, { tablePaginationClasses } from "@mui/material/TablePagination";
import MaterialPagination from "@mui/material/Pagination";
import { paginationItemClasses } from "@mui/material";
import { commaize } from "../../../utils/formatter";
import { Colors } from "../../../colors";
import type { FC } from "react";
import type { LabelDisplayedRowsArgs, TablePaginationProps } from "@mui/material/TablePagination";
import type { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import type { PaginationProps } from "@mui/material/Pagination";

const TablePaginationActions: FC<TablePaginationActionsProps> = (props) => {
  const currentPage = props.page + 1;
  const totalPageCount = Math.ceil(props.count / props.rowsPerPage);

  const onChange: PaginationProps['onChange'] = (_, newPage) => {
    props.onPageChange?.(null, newPage - 1);
  };

  return (
    <StyledPagination
      count={totalPageCount}
      page={currentPage}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export const TablePagination: FC<TablePaginationProps> = (props) => {
  const sculptLabelDisplayedRows = ({ from, to, count }: LabelDisplayedRowsArgs) => `showing ${commaize(from)} to ${commaize(to)} of ${commaize(count)} result`;
  return (
    <StyledTablePagination
      rowsPerPageOptions={[]}
      ActionsComponent={TablePaginationActions}
      labelDisplayedRows={sculptLabelDisplayedRows}
      {...props}
    />
  );
};

const StyledTablePagination = styled(MaterialTablePagination)({
  border: 'none',
  [`& .${tablePaginationClasses.spacer}`]: {
    display: 'none'
  },
  [`& .${tablePaginationClasses.toolbar}`]: {
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'space-between',
  },
  [`& .${tablePaginationClasses.displayedRows}`]: {
    fontSize: 12,
    color: Colors.gray4,
    lineHeight: 1,
  },
});

const StyledPagination = styled(MaterialPagination)({
  [`& .${paginationItemClasses.root}`]: {
    fontSize: '16px',
    color: '#1C1C1C',
    lineHeight: '24px',
    height: '40px',
    minWidth: '40px',
  },
  [`& .${paginationItemClasses.outlined}`]: {
    backgroundColor: 'white',
    borderColor: '#E8E8E8',
    boxShadow: '0px 1px 1px 0px #0000000F',
  },
  [`& .${paginationItemClasses.ellipsis}`]: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    color: '#969696',
  },
  [`& .${paginationItemClasses.rounded}`]: {
    borderRadius: '8px',
  },
  [`& .${paginationItemClasses.selected}`]: {
    borderColor: Colors.primary001,
    color: Colors.primary001,
    boxShadow: '0px 1px 1px 0px #00000014, 0px 2px 1px 0px #0000000F, 0px 1px 3px 0px #0000001A',
  },
  [`& .${paginationItemClasses.disabled}`]: {
    opacity: 0.4,
  },
});
