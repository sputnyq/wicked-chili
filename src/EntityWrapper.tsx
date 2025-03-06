import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StarBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

/**
 *
 * Jeder soll diese Vorlage nutzen, um ein Status abzubilden
 */

export const EntityWrapper = ({
  icon,
  title,
  customSummary,
  customDetails,
  href = "https://www.google.com",
}: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid2
          height={"100%"}
          justifyContent={"center"}
          container
          width={"100%"}
          spacing={1}
        >
          <Grid2 size={3}>
            <Link
              href={href}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
            >
              <Typography
                variant="h6"
                component={"div"}
                display={"flex"}
                gap={0.5}
                maxWidth={"95%"}
                alignItems={"center"}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                title={title}
              >
                {icon}
                {title}
              </Typography>
            </Link>
          </Grid2>
          <Grid2 size={8.5}>{expanded ? null : customSummary}</Grid2>
          <Grid2 size={0.5}>
            <IconButton>
              <StarBorderOutlined />
            </IconButton>
          </Grid2>
        </Grid2>
      </AccordionSummary>
      <AccordionDetails>{customDetails}</AccordionDetails>
    </Accordion>
  );
};
