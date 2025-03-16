import {
  Box,
  Button,
  CardProps,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card as MuiCard,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";

import DraftsIcon from "@mui/icons-material/Drafts";

import { OpenInNew } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";

const Card = (props: CardProps) => {
  return (
    <MuiCard sx={{ height: "100%", padding: 1 }} elevation={0} {...props} />
  );
};

export const Status = ({ color, title, endIcon }: any) => {
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
        maxWidth="xl"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          <DialogTitle>{title}</DialogTitle>
          <Chip size="small" label="In Progress" color={color} />
        </Stack>

        <IconButton
          aria-label="close"
          onClick={() => {}}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid2 container spacing={1} alignItems={"stretch"}>
            <Grid2 size={8}>
              <Card>
                <Box display={"flex"} flexDirection={"column"} gap={1}>
                  <InfoBlock />
                  <InfoBlock />
                  <InfoBlock />
                  <InfoBlock />
                  <InfoBlock />
                </Box>
              </Card>
            </Grid2>
            <Grid2 size={4}>
              <Card>
                <List>
                  <Action />
                  <Action />
                  <Action />
                </List>
              </Card>
            </Grid2>
            <Grid2 size={12}>
              <Card elevation={0} sx={{ height: "100%", padding: 1 }}>
                <Stack spacing={1} direction={"row"} flexWrap={"wrap"}>
                  <Link2 text={"Kibana"} title="Logs" />
                  <Link2
                    text={"APM"}
                    title="Application Performance Monitoring"
                  />
                  <Link2 text={"Prometheus"} title="Metrics" />
                  <Link2 text={"Grafana"} />
                </Stack>
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

const Action = (props: any) => {
  return (
    <ListItem disablePadding disableGutters>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={props.text ?? "Action"} />
      </ListItemButton>
    </ListItem>
  );
};

const Link2 = ({ text, title }: any) => {
  return (
    <Button color="info" size="small" startIcon={<OpenInNew />} title={title}>
      {text}
    </Button>
  );
};

const InfoBlock = () => {
  return (
    <Box width={"100%"} paddingY={0}>
      <Typography variant="body1" color="info">
        Tracked Revision
      </Typography>
      <Typography variant="body2">
        refs/heads/main a26e8b2fe8e7829892307bc32f5349ac1823687a
      </Typography>
    </Box>
  );
};
