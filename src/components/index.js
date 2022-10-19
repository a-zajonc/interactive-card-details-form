import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import { CardForm } from "./CardForm";
import { Box } from "@chakra-ui/react";
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
    <Box
      display="flex"
      flexDirection={{ sm: "column", lg: "row" }}
      alignItems="center"
      h="100vh"
      justifyContent={{ sm: "space-between", lg: "center" }}
    >
      <Box
        display="flex"
        flexDirection={{ sm: "column", lg: "column-reverse" }}
        justifyItems="center"
        w="100%"
        alignItems="center"
      >
        <BackCard cardVerificationCode={cardVerificationCode} />
        <FrontCard
          cardholderName={cardholderName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
        />
      </Box>
      <Box
        display="flex"
        alignItems={{ sm: "baseline", lg: "center" }}
        w={{ lg: "100%" }}
        h="57%"
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
      </Box>
    </Box>
  );
}
