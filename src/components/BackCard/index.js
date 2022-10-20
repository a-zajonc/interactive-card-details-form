import { Box, Img, Text } from "@chakra-ui/react";

//Poprawić odległość formularza od kart

export function BackCard({ cardVerificationCode }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      position={["absolute", "absolute", "absolute", "absolute", "relative"]}
      color="white"
      padding="10px"
      marginLeft={["15%", "15%", "20%", "35%", "13%"]}
    >
      <Img
        src="bg-card-back.png"
        alt="Back of the card"
        boxShadow="2xl"
        borderRadius="10px"
        h={["150px", "150px", "180px", "220px", "245px"]}
      />
      <Text
        fontSize={["12px", "12px", "16px", "17px", "18px"]}
        position="absolute"
        top={["45%", "45%", "43%", "45%", "44%"]}
        right="15%"
      >
        {!cardVerificationCode ? "000" : cardVerificationCode}
      </Text>
    </Box>
  );
}
