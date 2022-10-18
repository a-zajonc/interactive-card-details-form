import { Box, Img, Text } from "@chakra-ui/react";

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      position="relative"
      color="white"
      marginTop="15px"
    >
      <Img
        src="bg-card-back.png"
        alt="Back of the card"
        boxShadow="2xl"
        borderRadius="10px"
      />
      <Text fontSize="18px" position="absolute" top="43%" right="10%">
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
