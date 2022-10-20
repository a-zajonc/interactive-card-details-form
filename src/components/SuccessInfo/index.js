import { Box, Button, Heading, Text, Img } from "@chakra-ui/react";
import iconComplete from "./icon-complete.svg";

export function SuccessInfo() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h={["75%", "75%", "75%", "70%", "45%"]}
      alignItems="center"
      justifyContent={[
        "space-evenly",
        "space-evenly",
        "space-evenly",
        "space-around",
        "space-around",
      ]}
      w={{ sm: "100%", xl: "50%" }}
    >
      <Img src={iconComplete} alt="Icon Complete" h="100px" w="100px" />
      <Heading textTransform="uppercase" color="#21092F" fontWeight="500">
        Thank you!
      </Heading>
      <Text color="#8E8593" fontSize="18px" textAlign="center">
        We've added your card details
      </Text>
      <Button w={{ sm: "90%", xl: "100%" }} variant="primary" type="submit">
        Continue
      </Button>
    </Box>
  );
}
