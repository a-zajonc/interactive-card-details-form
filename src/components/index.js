import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box, GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { SuccessInfo } from "./SuccessInfo";

export function CardDetails() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cardVerificationCode, setCardVerificationCode] = useState("");
  const [submit, setSubmit] = useState("");
  const [valid, setValid] = useState("");

  return (
    <Box display="flex" alignItems="center" h="100vh" justifyContent="center">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        justifyItems="center"
        gap={1}
        w="100%"
      >
        <GridItem colSpan={1} rowSpan={1}>
          <FrontCard
            cardholderName={cardholderName}
            cardNumber={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
          />
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          display="flex"
          alignItems="center"
          w="100%"
        >
          {submit === true && valid === true ? (
            <SuccessInfo />
          ) : (
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
              submit={submit}
              setSubmit={setSubmit}
              valid={valid}
              setValid={setValid}
            />
          )}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} marginLeft="20%">
          <BackCard cardVerificationCode={cardVerificationCode} />
        </GridItem>
      </Grid>
    </Box>
  );
}
