import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useUserContext } from "../../../../context";

export function ExpDateInput({ submit }) {
  const { userCardDetails, setUserCardDetails } = useUserContext();
  return (
    <FormControl
      isInvalid={
        submit &&
        (userCardDetails.expYear.length < 2 ||
          userCardDetails.expMonth.length < 2 ||
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
          isValid={userCardDetails.expMonth.length === 2}
        />
        <Input
          type="text"
          borderColor={
            userCardDetails.expYear.length !== 2 && submit
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
          isValid={userCardDetails.expYear.length === 2}
        />
      </Box>
      <FormErrorMessage flexDirection="column" alignItems="flex-start">
        <Box>
          {userCardDetails.expMonth > 12 && submit
            ? "Month number is incorrect"
            : null}
        </Box>
        <Box>
          {(userCardDetails.expMonth.length === 1 ||
            userCardDetails.expYear.length === 1) &&
          submit
            ? "Number is too short"
            : null}
        </Box>
        <Box>
          {(userCardDetails.expMonth.length === 0 ||
            userCardDetails.expYear.length === 0) &&
          submit
            ? "Can't be blank"
            : null}
        </Box>
      </FormErrorMessage>
    </FormControl>
  );
}
