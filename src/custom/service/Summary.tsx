import { Box, Divider, Grid2, Typography } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export const Summary = ({ showPrs }: any) => {
  return (
    <Grid2 justifyContent={"center"} height={"100%"} container spacing={0.5}>
      {showPrs && (
        <Grid2 size={2}>
          <Typography
            component={"div"}
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            gap={0.5}
            variant="subtitle2"
            color="textSecondary"
          >
            Pull Requests: 3
          </Typography>
        </Grid2>
      )}
      <Grid2 size={4}>
        <IntegrationStates />
      </Grid2>
      <Grid2 size={showPrs ? 6 : 8}>
        <StagesStates />
      </Grid2>
    </Grid2>
  );
};

const StatusBox = ({ children }: any) => {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      gap={0.2}
      alignItems={"center"}
    >
      {children}
    </Box>
  );
};

const StagesStates = () => {
  const successColor = "success";

  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      gap={1}
      alignItems={"center"}
    >
      <Typography variant="subtitle2" color="textSecondary">
        Stages
      </Typography>
      <StatusBox>
        <CheckCircleIcon fontSize="small" color={successColor} />
        <ErrorIcon fontSize="small" color="warning" />
        <CheckCircleIcon
          fontSize="small"
          color={successColor}
          titleAccess="Use Html Title instedof Tooltip"
        />
        <ErrorIcon fontSize="small" color="warning" />

        <StageDivider />

        <CheckCircleIcon
          fontSize="small"
          color={successColor}
          titleAccess="Use Html Title instedof Tooltip"
        />
        <ErrorIcon fontSize="small" color="warning" />

        <StageDivider />

        <CheckCircleIcon
          fontSize="small"
          color={successColor}
          titleAccess="Use Html Title insted of Tooltip"
        />
        <ErrorIcon fontSize="small" color="warning" />

        <StageDivider />

        <CheckCircleIcon
          fontSize="small"
          color={successColor}
          titleAccess="Use Html Title insted of Tooltip"
        />
        <ErrorIcon
          fontSize="small"
          color="warning"
          titleAccess="Use Html Title insted of Tooltip"
        />
      </StatusBox>
    </Box>
  );
};

const StageDivider = () => {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{ background: "grey", margin: 0.5 }}
    />
  );
};

const IntegrationStates = () => {
  const successColor = "success";

  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      gap={1}
      alignItems={"center"}
    >
      <Typography variant="subtitle2" color="textSecondary">
        Integration
      </Typography>
      <StatusBox>
        <CheckCircleIcon fontSize="small" color={successColor} />
        <ErrorIcon fontSize="small" color="warning" />
        <CheckCircleIcon fontSize="small" color={successColor} />
        <CancelIcon fontSize="small" color="error" titleAccess="Last Promote" />
      </StatusBox>
    </Box>
  );
};
