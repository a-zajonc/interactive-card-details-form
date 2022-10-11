import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Box bgImg="bg-main-desktop.png" backgroundRepeat="repeat-y">
        <CardDetails />
      </Box>
    </ChakraProvider>
  );
}

export default App;
