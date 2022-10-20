import { Box, Button } from "@chakra-ui/react";
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
  setValid,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    isValidExp(expYear) &&
    isValidExp(expMonth) &&
    expMonth < 13 &&
    isValidName &&
    isValidCardNumber &&
    isValidCVC === true
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
      <Box
        display="flex"
        flexDirection="column"
        padding="10px"
        gap={1}
        w={{
          sm: "100%",
          xl: "55%",
        }}
        minW={["200px", "200px", "400px", "400px", "400px"]}
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
        <Box>
          <Button w="100%" variant="primary" type="submit" mt="10px">
            Confirm
          </Button>
        </Box>
      </Box>
    </form>
  );
}
