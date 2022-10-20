import { Box, Img, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";

export function FrontCard({ cardholderName, cardNumber, expMonth, expYear }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width="fit-content"
      position={{
        sm: "absolute",
        md: "absolute",
        lg: "absolute",
        xl: "relative",
      }}
      color="white"
      padding="10px"
      marginTop={{ sm: "100px", md: "100px", lg: "50px ", xl: "0%" }}
      marginRight={{ sm: "15%", md: "20%", lg: "35%", xl: "0%" }}
    >
      <Img
        src="bg-card-front.png"
        alt="Front of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={{ sm: "150px", md: "180px", lg: "220px", xl: "245px" }}
      />
      <Img
        src={cardLogo}
        alt="Card Logo"
        width={{ sm: "30", md: "50", lg: "50", xl: "84" }}
        height={{ sm: "6", md: "8", lg: "47", xl: "47" }}
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text
        fontSize={{ sm: "22px", md: "25px", lg: "30px", xl: "33px" }}
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
        fontSize={{ sm: "12px", md: "15px", lg: "17px", xl: "18px" }}
        textTransform="uppercase"
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        left="8%"
      >
        {!cardholderName ? "Jane Appleseed" : cardholderName}
      </Text>
      <Text
        fontSize={{ sm: "12px", md: "15px", lg: "17px", xl: "18px" }}
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        right="8%"
      >
        {!expMonth ? "00" : expMonth}/{!expYear ? "00" : expYear}
      </Text>
    </Box>
  );
}
