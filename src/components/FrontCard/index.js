import { Box, Image, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";

export function FrontCard({ cardholderName, cardNumber, expMonth, expYear }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      h="fit-content"
      width="fit-content"
      position="relative"
      color="white"
      boxShadow="2xl"
      borderRadius="10px"
      marginBottom="15px"
    >
      <Image src="bg-card-front.png" alt="Front of the card" />
      <Image
        src={cardLogo}
        alt="Card Logo"
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text fontSize="33px" position="absolute" top="50%" left="8%" right="8%">
        {!cardNumber
          ? "0000 0000 0000 0000"
          : cardNumber.match(/.{1,4}/g).join(" ")}
      </Text>
      <Text
        fontSize="18px"
        textTransform="uppercase"
        position="absolute"
        top="80%"
        left="8%"
      >
        {!cardholderName ? "Jane Appleseed" : cardholderName}
      </Text>
      <Text position="absolute" top="80%" right="8%">
        {!expMonth ? "00" : expMonth}/{!expYear ? "00" : expYear}
      </Text>
    </Box>
  );
}
