import { Box, Input, Text, Grid, GridItem, Button } from "@chakra-ui/react";

export function CardForm({ cardholderName, setCardholderName }) {
  return (
    <Grid
      padding="10px"
      w="25%"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Cardholder Name
        </Text>
        <Input
          fontSize="18px"
          placeholder="e.g. Jane Appleseed"
          _placeholder={{ color: "#DEDDDF" }}
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Card Number
        </Text>
        <Input
          fontSize="18px"
          placeholder="e.g. 1234 5678 9123 0000"
          _placeholder={{ color: "#DEDDDF" }}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          Exp. date (MM/YY)
        </Text>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Input
            w="45%"
            fontSize="18px"
            placeholder="MM"
            _placeholder={{ color: "#DEDDDF" }}
          />
          <Input
            w="45%"
            fontSize="18px"
            placeholder="YY"
            _placeholder={{ color: "#DEDDDF" }}
          />
        </Box>
      </GridItem>
      <GridItem colSpan={1} pb="20px">
        <Text
          color="#21092F"
          fontSize="15px"
          textTransform="uppercase"
          pb="10px"
        >
          CVC
        </Text>
        <Input
          fontSize="18px"
          gi
          placeholder="e.g. 123"
          _placeholder={{ color: "#DEDDDF" }}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Button w="100%" h="3rem" bgColor="#21092F" color="white">
          Confirm
        </Button>
      </GridItem>
    </Grid>
  );
}
