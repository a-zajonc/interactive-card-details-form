import { GridItem, Box, Text, Input } from "@chakra-ui/react";

export function CardNumberInput({
  cardNumber,
  setCardNumber,
  isValidCardNumber,
  submit,
}) {
  return (
    <GridItem colSpan={2}>
      <Text color="#21092F" fontSize="15px" textTransform="uppercase" pb="10px">
        Card Number
      </Text>
      <Input
        type="text"
        focusBorderColor="#6448FE"
        borderColor={
          isValidCardNumber === false && submit === true ? "#FF5252" : "inherit"
        }
        fontSize="18px"
        placeholder="e.g. 1234 5678 9123 0000"
        _placeholder={{ color: "#DEDDDF" }}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
        maxLength="16"
        inputMode="decimal"
        isValid={isValidCardNumber}
      />
      <Box fontSize="12px" color="#FF5252" marginTop="5px">
        {cardNumber.length < 16 && cardNumber.length > 0 && submit === true
          ? "Number is to short"
          : null}
      </Box>
      <Box fontSize="12px" color="#FF5252" marginTop="5px">
        {cardNumber.length === 0 && submit === true ? "Can't be empty" : null}
      </Box>
    </GridItem>
  );
}
