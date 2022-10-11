import { Box, Img, Text } from "@chakra-ui/react";

export function BackCard() {
  return (
    <Box h="fit-content" width="fit-content" position="relative" color="white">
      <Img src="bg-card-back.png" alt="Back of the card" />
      <Text fontSize="18px" position="absolute" top="43%" right="15%">
        000
      </Text>
    </Box>
  );
}
