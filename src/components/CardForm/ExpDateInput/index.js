import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

export function ExpDateInput({
  expMonth,
  expYear,
  setExpMonth,
  setExpYear,
  submit,
  isValidExp,
}) {
  return (
    <FormControl
      isInvalid={
        submit &&
        (isValidExp(expYear) === false ||
          isValidExp(expMonth) === false ||
          expMonth > 12)
      }
      mb="10px"
    >
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        Exp. date (MM/YY)
      </FormLabel>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Input
          type="text"
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
      <FormErrorMessage>
        {expMonth > 12 && submit ? "Month number is incorrect" : null}
      </FormErrorMessage>
      <FormErrorMessage>
        {(expMonth.length === 1 || expYear.length === 1) && submit
          ? "Number is too short"
          : null}
      </FormErrorMessage>
      <FormErrorMessage>
        {(expMonth.length === 0 || expYear.length === 0) && submit
          ? "Can't be blank"
          : null}
      </FormErrorMessage>
    </FormControl>
  );
}
