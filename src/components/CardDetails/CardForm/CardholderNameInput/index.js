import {
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserCardDetailsContext } from "../../context";

export function CardholderNameInput({ submit }) {
  const [userCardDetails, setUserCardDetails] = useContext(
    UserCardDetailsContext
  );

  return (
    <FormControl
      isInvalid={submit && userCardDetails.cardholderName.length <= 0}
      mb="10px"
    >
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        Cardholder Name
      </FormLabel>
      <Input
        fontSize="18px"
        placeholder="e.g. Jane Appleseed"
        _placeholder={{ color: "#DEDDDF" }}
        focusBorderColor="#6448FE"
        type="text"
        inputMode="text"
        value={userCardDetails.cardholderName}
        onChange={(e) =>
          setUserCardDetails({
            ...userCardDetails,
            cardholderName: e.target.value.replace(/\d/g, ""),
          })
        }
        isValid={userCardDetails.cardholderName.length > 0}
      />
      <FormErrorMessage>Can't be empty</FormErrorMessage>
    </FormControl>
  );
}
