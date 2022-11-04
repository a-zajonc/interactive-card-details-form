import { Box, Img, Text } from "@chakra-ui/react";
import cardBackImage from "../../../images/bg-card-back.png";

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      position={{ base: "absolute", xl: "relative" }}
      color="white"
      padding="10px"
      marginLeft={{ base: "15%", md: "20%", lg: "35%", xl: "13%" }}
    >
      <Img
        src={cardBackImage}
        alt="Back of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={{ base: "150px", md: "180px", lg: "220px", xl: "245px" }}
      />
      <Text
        fontSize={{ base: "12px", md: "16px", lg: "17px", xl: "18px" }}
        position="absolute"
        top={{ base: "45%", md: "43%", lg: "45%", xl: "44%" }}
        right="15%"
      >
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
