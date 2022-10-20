import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
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
  submit,
  setSubmit,
  valid,
  setValid,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    isValidName && isValidCardNumber && isValidCVC === true
      ? setValid(true)
      : setValid(false);
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
        display="flex"
        flexDirection="column"
        padding="10px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
        w={{
          sm: "100%",
          xl: "55%",
        }}
        minW={{ sm: "200px", md: "400px", lg: "400px", xl: "400px" }}
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
        <Box display="flex" flexDirection="row">
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
        </Box>
        <GridItem colSpan={2}>
          <Button
            w="100%"
            h="3rem"
            bgColor="#21092F"
            color="white"
            type="submit"
            marginTop="25px"
          >
            Confirm
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}
