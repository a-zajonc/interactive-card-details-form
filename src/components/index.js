import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export function CardDetails() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cardVerificationCode, setCardVerificationCode] = useState("");

  return (
    <Box display="flex" alignItems="center" h="100vh" justifyContent="center">
      <Box display="flex" flexDirection="column" w="40%">
        <FrontCard
          cardholderName={cardholderName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
        />
        <BackCard cardVerificationCode={cardVerificationCode} />
      </Box>
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
    </Box>
  );
}
