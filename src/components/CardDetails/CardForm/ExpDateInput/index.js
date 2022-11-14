import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserCardDetailsContext } from "../../context";

export function ExpDateInput({ submit, isValidExp }) {
  const [userCardDetails, setUserCardDetails] = useContext(
    UserCardDetailsContext
  );
  return (
    <FormControl
      isInvalid={
        submit &&
        (isValidExp(userCardDetails.expYear) === false ||
          isValidExp(userCardDetails.expMonth) === false ||
          userCardDetails.expMonth > 12)
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
          value={userCardDetails.expMonth}
          onChange={(e) =>
            setUserCardDetails({
              ...userCardDetails,
              expMonth: e.target.value.replace(/\D/g, ""),
            })
          }
          maxLength="2"
          inputMode="decimal"
          isValid={isValidExp(userCardDetails.expMonth)}
        />
        <Input
          type="text"
          borderColor={
            isValidExp(userCardDetails.expYear) === false && submit === true
              ? "#FF5252"
              : "inherit"
          }
          focusBorderColor="#6448FE"
          w="45%"
          fontSize="18px"
          placeholder="YY"
          _placeholder={{ color: "#DEDDDF" }}
          value={userCardDetails.expYear}
          onChange={(e) =>
            setUserCardDetails({
              ...userCardDetails,
              expYear: e.target.value.replace(/\D/g, ""),
            })
          }
          maxLength="2"
          inputMode="decimal"
          isValid={isValidExp(userCardDetails.expYear)}
        />
      </Box>
      <FormErrorMessage>
        {userCardDetails.expMonth > 12 && submit
          ? "Month number is incorrect"
          : null}
      </FormErrorMessage>
      <FormErrorMessage>
        {(userCardDetails.expMonth.length === 1 ||
          userCardDetails.expYear.length === 1) &&
        submit
          ? "Number is too short"
          : null}
      </FormErrorMessage>
      <FormErrorMessage>
        {(userCardDetails.expMonth.length === 0 ||
          userCardDetails.expYear.length === 0) &&
        submit
          ? "Can't be blank"
          : null}
      </FormErrorMessage>
    </FormControl>
  );
}
