import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";

export function CardDetails() {
  return (
    <Box display="flex" alignItems="center" h="100vh" justifyContent="center">
      <Box display="flex" flexDirection="column" w="40%">
        <FrontCard />
        <BackCard />
      </Box>
      <CardForm />
    </Box>
  );
}
