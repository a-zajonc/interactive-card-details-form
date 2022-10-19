import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components";
import theme from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg={{ sm: "bg-main-mobile.png", md: "bg-main-desktop.png" }}
        backgroundRepeat={{ sm: "repeat-x", md: "repeat-y" }}
      >
        <CardDetails />
      </Box>
    </ChakraProvider>
  );
}

export default App;
