import { Box, Button, Heading, Text, Img } from "@chakra-ui/react";
import iconComplete from "./icon-complete.svg";

export function SuccessInfo() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h={{ sm: "100%", lg: "70%" }}
      alignItems="center"
      justifyContent={{ sm: "space-evenly", lg: "space-around" }}
      w={{ sm: "100%", lg: "50%" }}
    >
      <Img src={iconComplete} alt="Icon Complete" h="100px" w="100px" />
      <Heading textTransform="uppercase" color="#21092F" fontWeight="500">
        Thank you!
      </Heading>
      <Text color="#8E8593" fontSize="18px">
        We've added your card details
      </Text>
      <Button
        w={{ sm: "90%", lg: "100%" }}
        h="3rem"
        bgColor="#21092F"
        color="white"
        type="submit"
      >
        Continue
      </Button>
    </Box>
  );
}
