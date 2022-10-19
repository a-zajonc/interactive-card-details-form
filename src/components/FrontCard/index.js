import { Box, Image, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";

export function FrontCard({ cardholderName, cardNumber, expMonth, expYear }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      h={{ sm: "fit-content", lg: "fit-content" }}
      width="fit-content"
      position={{ sm: "absolute", lg: "relative" }}
      color="white"
      marginTop={{ sm: "109px", lg: "0px" }}
      marginLeft={{ sm: "0px", lg: "-60px" }}
      marginRight={{ sm: "50px", lg: "0px" }}
      padding="10px"
    >
      <Image
        src="bg-card-front.png"
        alt="Front of the card"
        boxShadow="2xl"
        borderRadius="10px"
      />
      <Image
        src={cardLogo}
        alt="Card Logo"
        width={{ sm: "50", lg: "84" }}
        height={{ sm: "8", lg: "47" }}
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text
        fontSize={{ sm: "22px", lg: "33px" }}
        position="absolute"
        top="50%"
        left="8%"
        right="8%"
      >
        {!cardNumber
          ? "0000 0000 0000 0000"
          : cardNumber.match(/.{1,4}/g).join(" ")}
      </Text>
      <Text
        fontSize={{ sm: "12px", lg: "18px" }}
        textTransform="uppercase"
        position="absolute"
        top="80%"
        left="8%"
      >
        {!cardholderName ? "Jane Appleseed" : cardholderName}
      </Text>
      <Text
        fontSize={{ sm: "12px", lg: "18px" }}
        position="absolute"
        top="80%"
        right="8%"
      >
        {!expMonth ? "00" : expMonth}/{!expYear ? "00" : expYear}
      </Text>
    </Box>
  );
}
