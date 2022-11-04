import { Box, Img, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";
import cardFront from "../../images/bg-card-front.png";

export function FrontCard({ cardholderName, cardNumber, expMonth, expYear }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width="fit-content"
      position="relative"
      color="white"
      padding="10px"
      marginTop={["100px", "100px", "100px", "50px ", "0%"]}
      marginRight={["15%", "15%", "20%", "35%", "0%"]}
    >
      <Img
        src={cardFront}
        alt="Front of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={["150px", "150px,", "180px", "220px", "245px"]}
      />
      <Img
        src={cardLogo}
        alt="Card Logo"
        width={["30", "30", "50", "50", "84"]}
        height={["6", "6", "8", "47", "47"]}
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text
        fontSize={["22px", "22px", "25px", "30px", "33px"]}
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
        fontSize={["12px", "12px", "15px", "17px", "18px"]}
        textTransform="uppercase"
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        left="8%"
      >
        {!cardholderName ? "Jane Appleseed" : cardholderName}
      </Text>
      <Text
        fontSize={["12px", "12px", "15px", "17px", "18px"]}
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        right="8%"
      >
        {!expMonth ? "00" : expMonth}/{!expYear ? "00" : expYear}
      </Text>
    </Box>
  );
}
