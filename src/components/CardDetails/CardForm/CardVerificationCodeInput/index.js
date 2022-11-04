import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function CardVerificationCodeInput({
  cardVerificationCode,
  setCardVerificationCode,
  submit,
  isValidCVC,
}) {
  return (
    <FormControl
      marginLeft="7%"
      isInvalid={cardVerificationCode.length < 3 && submit}
      mb="10px"
    >
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        CVC
      </FormLabel>
      <Input
        type="text"
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
      <FormErrorMessage>
        {cardVerificationCode.length < 3 &&
        cardVerificationCode.length > 0 &&
        submit === true
          ? "Number is too short"
          : null}{" "}
        {cardVerificationCode.length === 0 && submit === true
          ? "Can't be blank"
          : null}
      </FormErrorMessage>
    </FormControl>
  );
}
