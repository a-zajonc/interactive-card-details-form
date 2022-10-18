import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box, GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";

export function CardDetails() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cardVerificationCode, setCardVerificationCode] = useState("");

  return (
    <Box display="flex" alignItems="center" h="100vh" justifyContent="center">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
        marginLeft="10%"
      >
        <GridItem colSpan={1} rowSpan={1}>
          <FrontCard
            cardholderName={cardholderName}
            cardNumber={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} display="flex" alignItems="center">
          <CardForm
            cardholderName={cardholderName}
            setCardholderName={setCardholderName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expMonth={expMonth}
            setExpMonth={setExpMonth}
            expYear={expYear}
            setExpYear={setExpYear}
            cardVerificationCode={cardVerificationCode}
            setCardVerificationCode={setCardVerificationCode}
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <BackCard cardVerificationCode={cardVerificationCode} />
        </GridItem>
      </Grid>
    </Box>
  );
}
