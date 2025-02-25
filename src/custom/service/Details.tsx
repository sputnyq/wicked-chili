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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

import DraftsIcon from "@mui/icons-material/Drafts";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export const Details = ({ showPrs }: any) => {
  const successColor = "success";

  return (
    <Box>
      <Grid2 container spacing={1.5} alignItems={"stretch"}>
        {showPrs && (
          <>
            <Grid2 size={6}>
              <InnerCard>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  marginBottom={1}
                >
                  Implementation Pull Requests
                </Typography>
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
              </InnerCard>
            </Grid2>
            <Grid2 size={6}>
              <InnerCard>
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
              </InnerCard>
            </Grid2>
          </>
        )}

        <Grid2 size={12}>
          <InnerCard>
            <Typography
              variant="subtitle2"
              marginBottom={1}
              color="textSecondary"
            >
              Integration
            </Typography>
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
          </InnerCard>
        </Grid2>

        <Grid2 size={12}>
          <InnerCard>
            <Typography
              variant="subtitle2"
              marginBottom={1}
              color="textSecondary"
            >
              Stages
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2 size={3}>
                <StageTitle title="Production" />
                <Box display={"flex"} flexDirection={"column"} gap={1}>
                  <Env successColor={successColor} title="micro-eh-prod-k8s" />
                  <Env successColor={successColor} title="macro-prod-aks" />
                </Box>
              </Grid2>

              <Grid2 size={3}>
                <StageTitle title="Acceptance" />
                <Env successColor={successColor} title="micro-eh-acc-k8s" />
              </Grid2>

              <Grid2 size={3}>
                <StageTitle title="Development" />
                <Env successColor={successColor} title="micro-eh-dev-k8s" />
              </Grid2>

              <Grid2 size={3}>
                <StageTitle title="Feature" />
                <Env
                  successColor={successColor}
                  title="kupo-19482-micro-eh-dev-k8s"
                ></Env>
              </Grid2>
            </Grid2>
          </InnerCard>
        </Grid2>
      </Grid2>
    </Box>
  );
};

const StageTitle = ({ title }: any) => {
  return (
    <Divider textAlign="left" sx={{ paddingBottom: 1 }}>
      <Typography variant="caption" color="textSecondary">
        {title}
      </Typography>
    </Divider>
  );
};

const Env = ({ title, successColor }: any) => {
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

const Status = ({ color, title }: any) => {
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
      <Button
        size="small"
        onClick={() => setOpen(true)}
        startIcon={icon}
        sx={{ paddingX: 1, justifyContent: "flex-start" }}
      >
        {title}
      </Button>
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

const InnerCard = ({ children }: any) => {
  return (
    <Card elevation={0} sx={{ p: 1, height: "100%" }}>
      {children}
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
