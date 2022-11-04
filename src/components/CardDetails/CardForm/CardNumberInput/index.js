import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

export function CardNumberInput({
  cardNumber,
  setCardNumber,
  isValidCardNumber,
  submit,
}) {
  return (
    <FormControl isInvalid={cardNumber.length < 16 && submit} mb="10px">
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        Card Number
      </FormLabel>
      <Input
        type="text"
        focusBorderColor="#6448FE"
        fontSize="18px"
        placeholder="e.g. 1234 5678 9123 0000"
        _placeholder={{ color: "#DEDDDF" }}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
        maxLength="16"
        inputMode="decimal"
        isValid={isValidCardNumber}
      />
      <FormErrorMessage>Number is to short</FormErrorMessage>
    </FormControl>
  );
}
