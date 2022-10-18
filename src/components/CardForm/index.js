import { Grid, GridItem, Button } from "@chakra-ui/react";
import { useState } from "react";
import { CardholderNameInput } from "./CardholderNameInput";
import { CardNumberInput } from "./CardNumberInput";
import { CardVerificationCodeInput } from "./CardVerificationCodeInput";
import { ExpDateInput } from "./ExpDateInput";

export function CardForm({
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expMonth,
  setExpMonth,
  expYear,
  setExpYear,
  cardVerificationCode,
  setCardVerificationCode,
}) {
  const [submit, setSubmit] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  const isValidName = cardholderName.length === 0 ? false : true;

  const isValidCardNumber = cardNumber.length < 16 ? false : true;

  const isValidCVC = cardVerificationCode.length < 3 ? false : true;

  function isValidExp(period) {
    return period.length < 2 ? false : true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        padding="10px"
        w="55%"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <CardholderNameInput
          cardholderName={cardholderName}
          setCardholderName={setCardholderName}
          submit={submit}
          isValidName={isValidName}
        />
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          submit={submit}
          isValidCardNumber={isValidCardNumber}
        />
        <ExpDateInput
          expMonth={expMonth}
          expYear={expYear}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          submit={submit}
          isValidExp={isValidExp}
        />
        <CardVerificationCodeInput
          cardVerificationCode={cardVerificationCode}
          setCardVerificationCode={setCardVerificationCode}
          submit={submit}
          isValidCVC={isValidCVC}
        />
        <GridItem colSpan={2}>
          <Button
            w="100%"
            h="3rem"
            bgColor="#21092F"
            color="white"
            type="submit"
          >
            Confirm
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}
