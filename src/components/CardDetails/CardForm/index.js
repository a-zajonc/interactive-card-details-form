import { Box, Button } from "@chakra-ui/react";
import { CardholderNameInput } from "./CardholderNameInput";
import { CardNumberInput } from "./CardNumberInput";
import { CardVerificationCodeInput } from "./CardVerificationCodeInput";
import { ExpDateInput } from "./ExpDateInput";
import { useContext } from "react";
import { UserCardDetailsContext } from "../context";

export function CardForm({ submit, setSubmit, setValid }) {
  const [userCardDetails] = useContext(UserCardDetailsContext);

  const isValidExpDate =
    userCardDetails.expYear.length === 2 &&
    userCardDetails.expMonth.length === 2 &&
    userCardDetails.expMonth < 13;

  const isValidName = userCardDetails.cardholderName.length > 0;

  const isValidCardNumber = userCardDetails.cardNumber.length === 16;

  const isValidCVC = userCardDetails.cardVerificationCode.length === 3;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    isValidExpDate && isValidName && isValidCardNumber && isValidCVC
      ? setValid(true)
      : setValid(false);
  };

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
        <CardholderNameInput submit={submit} />
        <CardNumberInput
          submit={submit}
          isValidCardNumber={isValidCardNumber}
        />
        <Box display="flex" flexDirection="row">
          <ExpDateInput submit={submit} />
          <CardVerificationCodeInput submit={submit} />
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
