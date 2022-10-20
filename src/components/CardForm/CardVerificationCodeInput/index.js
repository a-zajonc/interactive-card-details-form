import { Box, Input, Text } from "@chakra-ui/react";

export function CardVerificationCodeInput({
  cardVerificationCode,
  setCardVerificationCode,
  submit,
  isValidCVC,
}) {
  return (
    <Box marginLeft="10%">
      <Text color="#21092F" fontSize="15px" textTransform="uppercase" pb="10px">
        CVC
      </Text>
      <Input
        type="text"
        borderColor={
          isValidCVC === false && submit === true ? "#FF5252" : "inherit"
        }
        focusBorderColor="#6448FE"
        fontSize="18px"
        placeholder="e.g. 123"
        _placeholder={{ color: "#DEDDDF" }}
        value={cardVerificationCode}
        onChange={(e) =>
          setCardVerificationCode(e.target.value.replace(/\D/g, ""))
        }
        maxLength="3"
        inputMode="decimal"
        isValid={isValidCVC}
      />
      <Box fontSize="12px" color="#FF5252" marginTop="5px">
        {cardVerificationCode.length < 3 &&
        cardVerificationCode.length > 0 &&
        submit === true
          ? "Number is too short"
          : null}
      </Box>
      <Box fontSize="12px" color="#FF5252" marginTop="5px">
        {cardVerificationCode.length === 0 && submit === true
          ? "Can't be blank"
          : null}
      </Box>
    </Box>
  );
}
