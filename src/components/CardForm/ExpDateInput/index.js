import { Text, Box, Input, GridItem } from "@chakra-ui/react";

export function ExpDateInput({
  expMonth,
  expYear,
  setExpMonth,
  setExpYear,
  submit,
  isValidExp,
}) {
  return (
    <GridItem colSpan={1}>
      <Text color="#21092F" fontSize="15px" textTransform="uppercase" pb="10px">
        Exp. date (MM/YY)
      </Text>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Input
          type="text"
          borderColor={
            isValidExp(expMonth) === false && submit === true
              ? "#FF5252"
              : "inherit"
          }
          focusBorderColor="#6448FE"
          w="45%"
          fontSize="18px"
          placeholder="MM"
          _placeholder={{ color: "#DEDDDF" }}
          value={expMonth}
          onChange={(e) => setExpMonth(e.target.value.replace(/\D/g, ""))}
          maxLength="2"
          inputMode="decimal"
          isValid={isValidExp(expMonth)}
        />
        <Input
          type="text"
          borderColor={
            isValidExp(expYear) === false && submit === true
              ? "#FF5252"
              : "inherit"
          }
          focusBorderColor="#6448FE"
          w="45%"
          fontSize="18px"
          placeholder="YY"
          _placeholder={{ color: "#DEDDDF" }}
          value={expYear}
          onChange={(e) => setExpYear(e.target.value.replace(/\D/g, ""))}
          maxLength="2"
          inputMode="decimal"
          isValid={isValidExp(expYear)}
        />
      </Box>
      <Box fontSize="11px" color="#FF5252" marginTop="5px">
        {(expMonth.length === 1 || expYear.length === 1) && submit
          ? "Number is too short"
          : null}
      </Box>
      <Box fontSize="11px" color="#FF5252" marginTop="5px">
        {(expMonth.length === 0 || expYear.length === 0) && submit
          ? "Can't be blank"
          : null}
      </Box>
    </GridItem>
  );
}
