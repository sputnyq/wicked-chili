import {
  Box,
  CssBaseline,
  FormControlLabel,
  Grid2,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";

import theme from "./theme";

import { ServiceStatus } from "./custom/service";
import { StatusAcc } from "./StatusAcc";

const ColBox = (props: any) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} {...props}>
      {props.children}
    </Box>
  );
};

export function App() {
  const [prs, setPrs] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={2}>
        <Box p={2}>
          <FormControlLabel
            control={
              <Switch
                checked={prs}
                onChange={(ev) => {
                  setPrs(ev.target.checked);
                }}
              />
            }
            label={"zeige Pull requests"}
          />
        </Box>
        <Grid2 container spacing={1}>
          <Grid2 size={3} sx={{ border: "1px solid green" }}>
            Belegt: filter, sidebar etc
          </Grid2>
          <Grid2 size={9}>
            <ColBox>
              <ServiceStatus showPrs={prs} title="escobar" />
              <ServiceStatus
                showPrs={prs}
                title="ai-de-energy-certificate-manager"
              />
              <ServiceStatus
                showPrs={prs}
                title="communication-attachment-scanner"
              />
              <ServiceStatus
                showPrs={prs}
                title="submission-management-anonymization-saga"
              />

              <CustomStatus />
            </ColBox>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}

import AdjustIcon from "@mui/icons-material/Adjust";
import { useState } from "react";

const CustomStatus = () => {
  return (
    <StatusAcc
      title="entity with status"
      href="#"
      customSummary={<Typography align="center">Custom Summary</Typography>}
      customDetails={
        <>
          <Typography variant="h4"> Custom Details</Typography>
          <Typography>Hier könnte Ihre Werbung stehen</Typography>
        </>
      }
      icon={<AdjustIcon />}
    ></StatusAcc>
  );
};
