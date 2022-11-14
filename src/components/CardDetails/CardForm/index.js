import { Box, Button } from "@chakra-ui/react";
import { CardholderNameInput } from "./CardholderNameInput";
import { CardNumberInput } from "./CardNumberInput";
import { CardVerificationCodeInput } from "./CardVerificationCodeInput";
import { ExpDateInput } from "./ExpDateInput";
import { useContext } from "react";
import { UserCardDetailsContext } from "../context";

export function CardForm({ submit, setSubmit, setValid }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    isValidExp(userCardDetails.expYear) &&
    isValidExp(userCardDetails.expMonth) &&
    userCardDetails.expMonth < 13 &&
    isValidName &&
    isValidCardNumber &&
    isValidCVC === true
      ? setValid(true)
      : setValid(false);
  };

  const [userCardDetails] = useContext(UserCardDetailsContext);

  const isValidName =
    userCardDetails.cardholderName.length === 0 ? false : true;

  const isValidCardNumber =
    userCardDetails.cardNumber.length < 16 ? false : true;

  const isValidCVC =
    userCardDetails.cardVerificationCode.length < 3 ? false : true;

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
        minW={{ base: "200px", md: "400px" }}
      >
        <CardholderNameInput submit={submit} isValidName={isValidName} />
        <CardNumberInput
          submit={submit}
          isValidCardNumber={isValidCardNumber}
        />
        <Box display="flex" flexDirection="row">
          <ExpDateInput submit={submit} isValidExp={isValidExp} />
          <CardVerificationCodeInput submit={submit} isValidCVC={isValidCVC} />
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
