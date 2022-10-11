import { ChakraProvider } from "@chakra-ui/react";
import { CardDetails } from "./components";

function App() {
  return (
    <ChakraProvider>
      <CardDetails />
    </ChakraProvider>
  );
}

export default App;
