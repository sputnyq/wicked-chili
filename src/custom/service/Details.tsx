import {
  Box,
  Card,
  Divider,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import CallSplitIcon from "@mui/icons-material/CallSplit";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import { StatusesBox } from "../../StatusesBox";
import { Status } from "./Status";

import GitHubIcon from "@mui/icons-material/GitHub";

export const Details = ({ showPrs }: any) => {
  const successColor = "success";

  return (
    <Box>
      <Grid2 container spacing={1} alignItems={"stretch"}>
        {showPrs && (
          <>
            <Grid2 size={6}>
              <StatusesBox
                title="Implementation"
                actions={
                  <IconButton size="small">
                    <GitHubIcon />
                  </IconButton>
                }
              >
                <Box
                  paddingY={1}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0.5}
                  alignItems={"flex-start"}
                >
                  <PR />
                  <PR />
                </Box>
              </StatusesBox>
            </Grid2>
            <Grid2 size={6}>
              <StatusesBox title="Deployment" actions={null}>
                <Box
                  paddingY={1}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0.5}
                  alignItems={"flex-start"}
                >
                  <PR2 />
                </Box>
              </StatusesBox>
            </Grid2>
          </>
        )}

        <Grid2 size={12}>
          <StatusesBox title="Integration" actions={null}>
            <Grid2 container spacing={2}>
              <Grid2 size={3}>
                <Status color={successColor} title="Mainline build" />
              </Grid2>
              <Grid2 size={3}>
                <Status color="warning" title="Security scan" />
              </Grid2>
              <Grid2 size={3}>
                <Status color={successColor} title="Tech Docs publishing" />
              </Grid2>
              <Grid2 size={3}>
                <Status color="error" title="Last Promote" />
              </Grid2>
            </Grid2>
          </StatusesBox>
        </Grid2>

        <Grid2 size={12}>
          <StatusesBox title="Production" actions={null}>
            <Stack direction={"column"} spacing={2}>
              <Stack direction={"row"} spacing={1}>
                <Status
                  color={successColor}
                  endIcon={<SyncOutlinedIcon />}
                  title="core-in-mwe-aks"
                ></Status>
                <Status
                  color={successColor}
                  endIcon={<SyncOutlinedIcon />}
                  title="core-in-mwe-aks"
                ></Status>
                <Status
                  color={successColor}
                  endIcon={<SyncOutlinedIcon />}
                  title="sandbox-dev-k8s"
                ></Status>
              </Stack>

              <Stack direction={"row"} spacing={1}>
                <Status
                  color={successColor}
                  endIcon={<FavoriteBorderOutlinedIcon />}
                  title="core-in-mwe-aks"
                ></Status>
                <Status
                  color={successColor}
                  endIcon={<FavoriteBorderOutlinedIcon />}
                  title="core-in-mwe-aks"
                ></Status>
                <Status
                  color={successColor}
                  endIcon={<FavoriteBorderOutlinedIcon />}
                  title="sandbox-dev-k8s"
                ></Status>
              </Stack>
            </Stack>
          </StatusesBox>
        </Grid2>
        <Grid2 size={12}>
          <StatusesBox title="Staging" actions={null}></StatusesBox>
        </Grid2>
        <Grid2 size={12}>
          <StatusesBox
            title="Development"
            actions={
              <IconButton size="small">
                <CallSplitIcon />
              </IconButton>
            }
          ></StatusesBox>
        </Grid2>
        <Grid2 size={12}>
          <StatusesBox
            title="Feature"
            actions={
              <>
                <IconButton size="small">
                  <SyncOutlinedIcon />
                </IconButton>
                <IconButton size="small">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </>
            }
          ></StatusesBox>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export const StageTitle = ({ title }: any) => {
  return (
    <Divider textAlign="left" sx={{ paddingBottom: 1 }}>
      <Typography variant="caption" color="textSecondary">
        {title}
      </Typography>
    </Divider>
  );
};

export const Env = ({ title, successColor }: any) => {
  return (
    <Card sx={{ p: 1 }}>
      <Typography variant="subtitle2">{title}</Typography>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        gap={0.5}
        p={1}
        width={"100%"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Status color={successColor} title="Health"></Status>
          <Typography variant="caption" color="info">
            refs/tags/2025-02-05_12-49-53
          </Typography>
        </Box>
        <Box>
          <Status color="warning" title="Sync"></Status>
        </Box>
      </Box>
    </Card>
  );
};

const PR = () => {
  return (
    <Status color="info" title="AUTO-1: Update dependency redoc to v2.4.0" />
  );
};

const PR2 = () => {
  return <Status color="warning" title="RELTEC-11165: implement sth" />;
};
