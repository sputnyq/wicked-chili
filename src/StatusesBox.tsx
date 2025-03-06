import { Box, Card, Stack, Typography } from "@mui/material";
import * as React from "react";

interface StatusesBoxProps {
  title: string;
  actions: React.ReactNode;
}

export const StatusesBox = ({
  title,
  actions,
  children,
}: React.PropsWithChildren<StatusesBoxProps>) => {
  return (
    <Card elevation={0} sx={{ p: 1 }}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="space-between" alignItems={"start"}>
          <Box>
            <Typography variant="subtitle2">{title}</Typography>
          </Box>
          <Box>{actions}</Box>
        </Box>
        <Box>{children}</Box>
      </Stack>
    </Card>
  );
};
