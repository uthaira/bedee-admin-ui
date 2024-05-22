import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { SxProps, Theme, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { Colors } from '../../colors'

export type TableFooterProps = {
  sx?: SxProps<Theme>;
  limit?: number;
  offset?: number;
  total?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, newPage: number) => void;
};

export const TableFooter: FC<TableFooterProps> = ({
  limit = 0,
  offset = 0,
  total = 0,
  onPageChange,
  ...rest
}) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange?.(event, newPage);
  };

  if (total <= 0) return null;

  return (
    <RootStyle className="TableFooter" aria-label="table-footer" {...rest}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {total > 0 && (
          <Typography variant="body1" color={Colors.gray4} sx={{ fontSize: 12 }}>
            showing {offset + 1} to {offset + limit} ({total} records)
          </Typography>
        )}
      </Box>

      <Pagination
        page={Math.floor((offset / limit) + 1)}
        count={Math.ceil(total / limit)}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handlePageChange}
      />
    </RootStyle>
  );
};

const RootStyle = styled("div")({
  padding: "12px 0px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});