import { Box, Img, Text } from "@chakra-ui/react";

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      h={{ sm: "fit-content", lg: "fit-content" }}
      position={{ sm: "absolute", lg: "relative" }}
      color="white"
      marginTop="15px"
      marginLeft={{ sm: "50px", lg: "100px" }}
      padding="10px"
    >
      <Img
        src="bg-card-back.png"
        alt="Back of the card"
        boxShadow="2xl"
        borderRadius="10px"
      />
      <Text
        fontSize={{ sm: "14px", lg: "18px" }}
        position="absolute"
        top={{ sm: "43%", lg: "44%" }}
        right={{ sm: "15%", lg: "15%" }}
      >
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
