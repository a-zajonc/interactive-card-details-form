import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useUserContext } from "../../../../context";

export function CardNumberInput({ submit }) {
  const { userCardDetails, setUserCardDetails } = useUserContext();

  return (
    <FormControl
      isInvalid={userCardDetails.cardNumber.length < 16 && submit}
      mb="10px"
    >
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        Card Number
      </FormLabel>
      <Input
        type="text"
        focusBorderColor="#6448FE"
        fontSize="18px"
        placeholder="e.g. 1234 5678 9123 0000"
        _placeholder={{ color: "#DEDDDF" }}
        value={userCardDetails.cardNumber}
        onChange={(e) =>
          setUserCardDetails({
            ...userCardDetails,
            cardNumber: e.target.value.replace(/\D/g, ""),
          })
        }
        maxLength="16"
        inputMode="decimal"
        isValid={userCardDetails.cardNumber.length < 16}
      />
      <FormErrorMessage>Number is to short</FormErrorMessage>
    </FormControl>
  );
}
