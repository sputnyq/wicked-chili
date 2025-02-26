import { EntityWrapper } from "../../EntityWrapper";
import MemoryIcon from "@mui/icons-material/Memory";
import { Details } from "./Details";
import { Summary } from "./Summary";

export const ServiceEntity = (props: any) => {
  return (
    <EntityWrapper
      {...props}
      icon={<MemoryIcon />}
      customSummary={<Summary {...props} />}
      customDetails={<Details {...props} />}
    />
  );
};
