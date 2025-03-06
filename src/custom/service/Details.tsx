import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import CallSplitIcon from "@mui/icons-material/CallSplit";

import DraftsIcon from "@mui/icons-material/Drafts";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { StatusesBox } from "../../StatusesBox";

export const Details = ({ showPrs }: any) => {
  const successColor = "success";

  return (
    <Box>
      <Grid2 container spacing={1.5} alignItems={"stretch"}>
        {showPrs && (
          <>
            <Grid2 size={6}>
              <StatusesBox title="Implementation" actions={null}>
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
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  marginBottom={1}
                >
                  Deployment Pull Requests
                </Typography>
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
              <Stack direction="row" spacing={1}>
                <IconButton size="small">
                  <CallSplitIcon />
                </IconButton>
              </Stack>
            }
          ></StatusesBox>
        </Grid2>
        <Grid2 size={12}>
          <StatusesBox
            title="Feature"
            actions={
              <Stack direction={"row"} spacing={1}>
                <IconButton size="small">
                  <SyncOutlinedIcon />
                </IconButton>
                <IconButton size="small">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Stack>
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

const Status = ({ color, title, endIcon }: any) => {
  const [open, setOpen] = useState(false);

  let icon = null;

  switch (color) {
    case "success":
      icon = <CheckCircleIcon color="success" />;
      break;
    case "error":
      icon = <CancelIcon color="error" />;
      break;
    case "warning":
      icon = <ErrorIcon color="warning" />;
      break;
    case "info":
      icon = <CheckCircleIcon color="info" />;
      break;
    default:
      icon = <CheckCircleIcon color="disabled" />;
  }
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Grid2 container spacing={1} alignItems={"stretch"}>
            <Grid2 size={8}>
              <Card>
                <CardContent>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography variant="h6">Details</Typography>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <List>
                    <Action />
                    <Action />
                    <Action />
                    <Action />
                    <Action />
                    <Action />
                  </List>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
      <Box>
        <Button
          size="small"
          onClick={() => setOpen(true)}
          startIcon={icon}
          endIcon={endIcon}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};

const Action = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Action" />
      </ListItemButton>
    </ListItem>
  );
};

const InfoBlock = () => {
  return (
    <Box width={"100%"} paddingY={1}>
      <Typography variant="body1" color="info">
        Tracked Revision
      </Typography>
      <Typography variant="body2">
        refs/heads/main a26e8b2fe8e7829892307bc32f5349ac1823687a
      </Typography>
    </Box>
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
