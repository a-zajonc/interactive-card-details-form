import { Box, Image, Text } from "@chakra-ui/react";
import cardLogo from "./card-logo.svg";

export function FrontCard({ cardholderName }) {
  return (
    <Box
      h="fit-content"
      width="fit-content"
      position="relative"
      color="white"
      marginBottom="20px"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Image src="bg-card-front.png" alt="Front of the card" />
      <Image
        src={cardLogo}
        alt="Card Logo"
        position="absolute"
        top="10%"
        left="8%"
      />
      <Text fontSize="33px" position="absolute" top="50%" left="8%" right="8%">
        0000 0000 0000 0000
      </Text>
      <Text
        fontSize="18px"
        textTransform="uppercase"
        position="absolute"
        top="80%"
        left="8%"
      >
        {!cardholderName ? "Jane Appleseed" : cardholderName}
      </Text>
      <Text position="absolute" top="80%" right="8%">
        00/00
      </Text>
    </Box>
  );
}
