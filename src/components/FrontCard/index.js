import { Box, Image, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";

export function FrontCard() {
  return (
    <Box h="fit-content" width="fit-content" position="relative" color="white">
      <Image src="bg-card-front.png" alt="Front of the card" />
      <Image
        src={cardLogo}
        alt="Card Logo"
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text position="absolute" top="65%" left="8%">
        0000 0000 0000 0000
      </Text>
      <Text position="absolute" top="85%" left="8%">
        Jane Appleseed
      </Text>
      <Text position="absolute" top="85%" right="8%">
        00/00
      </Text>
    </Box>
  );
}
