import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";

export function CardDetails() {
  return (
    <Box display="flexbox" flexDirection="column">
      <FrontCard />
      <BackCard />
      <CardForm />
    </Box>
  );
}
