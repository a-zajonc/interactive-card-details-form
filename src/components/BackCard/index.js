import { Box, Img, Text } from "@chakra-ui/react";

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      h="fit-content"
      width="fit-content"
      position="relative"
      color="white"
      w="75%"
      display="flex"
      justifyContent="flex-end"
      marginTop="20px"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Img src="bg-card-back.png" alt="Back of the card" />
      <Text fontSize="18px" position="absolute" top="43%" right="10%">
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
