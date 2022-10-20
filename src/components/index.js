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
      flexDirection={["column", "column", "column", "column", "row"]}
      alignItems="center"
      h="100vh"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection={{
          sm: "column",
          md: "column",
          lg: "column",
          xl: "column-reverse",
        }}
        justifyItems="center"
        w="100%"
        h={["500px", "500px", "500px", "500px", "fit-content"]}
        alignItems="center"
        justifyContent={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
        ]}
        marginRight={{ xl: "30px" }}
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
        alignItems={{ sm: "baseline", xl: "center" }}
        w={{ xl: "100%" }}
        h="inherit"
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
