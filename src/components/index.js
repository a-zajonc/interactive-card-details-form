import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";

export function CardDetails() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box>
        <FrontCard />
        <BackCard />
      </Box>
      <CardForm />
    </Box>
  );
}
