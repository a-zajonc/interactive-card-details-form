import { Text, Input, Box } from "@chakra-ui/react";

export function CardholderNameInput({
  cardholderName,
  setCardholderName,
  submit,
  isValidName,
}) {
  return (
    <Box>
      <Text color="#21092F" fontSize="15px" textTransform="uppercase" pb="10px">
        Cardholder Name
      </Text>
      <Input
        fontSize="18px"
        placeholder="e.g. Jane Appleseed"
        _placeholder={{ color: "#DEDDDF" }}
        borderColor={
          isValidName === false && submit === true ? "#FF5252" : "inherit"
        }
        focusBorderColor="#6448FE"
        type="text"
        inputMode="text"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value.replace(/\d/g, ""))}
        isValid={isValidName}
      />
      <Box fontSize="12px" color="#FF5252" marginTop="5px">
        {submit & (isValidName === false) ? "Can't be empty" : null}
      </Box>
    </Box>
  );
}
