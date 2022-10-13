import {
  Box,
  Input,
  Text,
  Grid,
  GridItem,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export function CardForm({
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expMonth,
  setExpMonth,
  expYear,
  setExpYear,
  cardVerificationCode,
  setCardVerificationCode,
}) {
  return (
    <Grid
      padding="10px"
      w="25%"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Cardholder Name
        </Text>
        <Input
          fontSize="18px"
          placeholder="e.g. Jane Appleseed"
          _placeholder={{ color: "#DEDDDF" }}
          focusBorderColor="#6448FE"
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Card Number
        </Text>
        <NumberInput focusBorderColor="#6448FE">
          <NumberInputField
            fontSize="18px"
            placeholder="e.g. 1234 5678 9123 0000"
            _placeholder={{ color: "#DEDDDF" }}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
          />
        </NumberInput>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Exp. date (MM/YY)
        </Text>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <NumberInput focusBorderColor="#6448FE" w="45%">
            <NumberInputField
              fontSize="18px"
              placeholder="MM"
              _placeholder={{ color: "#DEDDDF" }}
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
              maxLength="2"
            />
          </NumberInput>
          <NumberInput focusBorderColor="#6448FE" w="45%">
            <NumberInputField
              fontSize="18px"
              placeholder="YY"
              _placeholder={{ color: "#DEDDDF" }}
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              maxLength="2"
            />
          </NumberInput>
        </Box>
      </GridItem>
      <GridItem colSpan={1} pb="20px">
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          CVC
        </Text>
        <NumberInput focusBorderColor="#6448FE" errorBorderColor="#FF5252">
          <NumberInputField
            fontSize="18px"
            placeholder="e.g. 123"
            _placeholder={{ color: "#DEDDDF" }}
            value={cardVerificationCode}
            onChange={(e) => setCardVerificationCode(e.target.value)}
            maxLength="3"
          />
        </NumberInput>
      </GridItem>
      <GridItem colSpan={2}>
        <Button w="100%" h="3rem" bgColor="#21092F" color="white">
          Confirm
        </Button>
      </GridItem>
    </Grid>
  );
}
