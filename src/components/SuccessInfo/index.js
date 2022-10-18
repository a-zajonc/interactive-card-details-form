import { Box, Button, Heading, Text, Img } from "@chakra-ui/react";
import iconComplete from "./icon-complete.svg";

export function SuccessInfo() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="70%"
      w="25rem"
      alignItems="center"
      justifyContent="space-around"
    >
      <Img src={iconComplete} alt="Icon Complete" h="100px" w="100px" />
      <Heading textTransform="uppercase" color="#21092F" fontWeight="500">
        Thank you!
      </Heading>
      <Text color="#8E8593" fontSize="18px">
        We've added your card details
      </Text>
      <Button w="100%" h="3rem" bgColor="#21092F" color="white" type="submit">
        Continue
      </Button>
    </Box>
  );
}
