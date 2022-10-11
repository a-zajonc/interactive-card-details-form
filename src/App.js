import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components";
import theme from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgImg="bg-main-desktop.png" backgroundRepeat="repeat-y">
        <CardDetails />
      </Box>
    </ChakraProvider>
  );
}

export default App;
