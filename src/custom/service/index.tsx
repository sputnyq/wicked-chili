import { StatusAcc } from "../../StatusAcc";
import MemoryIcon from "@mui/icons-material/Memory";
import { Details } from "./Details";
import { Summary } from "./Summary";

export const ServiceStatus = (props: any) => {
  return (
    <StatusAcc
      {...props}
      icon={<MemoryIcon />}
      customSummary={<Summary {...props} />}
      customDetails={<Details {...props} />}
    />
  );
};
