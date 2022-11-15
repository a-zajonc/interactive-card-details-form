import { Box, Img, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";
import cardFrontImage from "../../../images/bg-card-front.png";
import { useUserContext } from "../../../context";

export function FrontCard() {
  const { userCardDetails } = useUserContext();

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width="fit-content"
      position="relative"
      color="white"
      padding="10px"
      marginTop={{ base: "100px", lg: "50px ", xl: "0%" }}
      marginRight={{ base: "15%", md: "20%", lg: "35%", xl: "0%" }}
    >
      <Img
        src={cardFrontImage}
        alt="Front of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={{ base: "150px", md: "180px", lg: "220px", xl: "245px" }}
      />
      <Img
        src={cardLogo}
        alt="Card Logo"
        width={{ base: "30", md: "50", lg: "50", xl: "84" }}
        height={{ base: "6", md: "8", lg: "47", xl: "47" }}
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text
        fontSize={{ base: "22px", md: "25px", lg: "30px", xl: "33px" }}
        position="absolute"
        top="50%"
        left="8%"
        right="8%"
      >
        {!userCardDetails.cardNumber
          ? "0000 0000 0000 0000"
          : userCardDetails.cardNumber.match(/.{1,4}/g).join(" ")}
      </Text>
      <Text
        fontSize={{ base: "12px", md: "15px", lg: "17px", xl: "18px" }}
        textTransform="uppercase"
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        left="8%"
      >
        {!userCardDetails.cardholderName
          ? "Jane Appleseed"
          : userCardDetails.cardholderName}
      </Text>
      <Text
        fontSize={{ base: "12px", md: "15px", lg: "17px", xl: "18px" }}
        position="absolute"
        top={{ sm: "75%", xl: "80%" }}
        right="8%"
      >
        {!userCardDetails.expMonth ? "00" : userCardDetails.expMonth}/
        {!userCardDetails.expYear ? "00" : userCardDetails.expYear}
      </Text>
    </Box>
  );
}
