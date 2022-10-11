import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Box bgImg="bg-main-desktop.png" backgroundRepeat="repeat-y" h="100vh">
        <CardDetails />
      </Box>
    </ChakraProvider>
  );
}

export default App;
