import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export function CardDetails() {
  const [cardholderName, setCardholderName] = useState("");

  return (
    <Box display="flex" alignItems="center" h="100vh" justifyContent="center">
      <Box display="flex" flexDirection="column" w="40%">
        <FrontCard cardholderName={cardholderName} />
        <BackCard />
      </Box>
      <CardForm
        cardholderName={cardholderName}
        setCardholderName={setCardholderName}
      />
    </Box>
  );
}
