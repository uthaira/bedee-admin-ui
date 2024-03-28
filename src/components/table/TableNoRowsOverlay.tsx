import Stack from "@mui/material/Stack";
import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NoRowsIcon } from "../../icons/NoRows";

export type TableNoRowsOverlayProps = {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
};

export const TableNoRowsOverlay = ({
  title,
  description,
  icon,
}: TableNoRowsOverlayProps) => {
  return (
    <RootStyle spacing={2}>
      {icon ?? <NoRowsIcon />}

      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Title>{title ?? "No rows"}</Title>

        {description && <Description>{description}</Description>}
      </Stack>
    </RootStyle>
  );
};

const RootStyle = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const Title = styled(Typography)({
  fontWeight: "600",
  fontSize: "20px",
  textAlign: "center",
});

const Description = styled(Typography)({
  fontsize: "16px",
  textAlign: "center",
});