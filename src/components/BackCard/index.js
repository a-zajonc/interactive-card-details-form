import { Box, Img, Text } from "@chakra-ui/react";

//Poprawić odległość formularza od kart

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      position={{ sm: "absolute", md: "absolute", xl: "relative" }}
      color="white"
      padding="10px"
      marginLeft={{ sm: "15%", md: "20%", lg: "35%", xl: "13%" }}
    >
      <Img
        src="bg-card-back.png"
        alt="Back of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={{ sm: "150px", md: "180px", lg: "220px", xl: "245px" }}
      />
      <Text
        fontSize={{ sm: "12px", md: "16px", lg: "17px", xl: "18px" }}
        position="absolute"
        top={{ sm: "45%", md: "43%", lg: "45%", xl: "44%" }}
        right={{ sm: "15%", md: "15%", lg: "15%", xl: "15%" }}
      >
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
