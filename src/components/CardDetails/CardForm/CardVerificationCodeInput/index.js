import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { UserCardDetailsContext } from "../../context";
import { useContext } from "react";

export function CardVerificationCodeInput({ submit }) {
  const [userCardDetails, setUserCardDetails] = useContext(
    UserCardDetailsContext
  );

  return (
    <FormControl
      marginLeft="7%"
      isInvalid={userCardDetails.cardVerificationCode.length < 3 && submit}
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
        value={userCardDetails.cardVerificationCode}
        onChange={(e) =>
          setUserCardDetails({
            ...userCardDetails,
            cardVerificationCode: e.target.value.replace(/\D/g, ""),
          })
        }
        maxLength="3"
        inputMode="decimal"
        isValid={userCardDetails.cardVerificationCode.length < 3}
      />
      <FormErrorMessage>
        {userCardDetails.cardVerificationCode.length < 3 &&
        userCardDetails.cardVerificationCode.length > 0 &&
        submit
          ? "Number is too short"
          : null}
        {userCardDetails.cardVerificationCode.length === 0 && submit
          ? "Can't be blank"
          : null}
      </FormErrorMessage>
    </FormControl>
  );
}
