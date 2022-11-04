import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components/";
import theme from ".";
import bgCardMobile from "./images/bg-main-mobile.png";
import bgDesktopMobile from "./images/bg-main-desktop.png";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg={{ sm: bgCardMobile, xl: bgDesktopMobile }}
        backgroundRepeat={[
          "repeat-x",
          "repeat-x",
          "repeat-x",
          "repeat-x",
          "repeat-y",
        ]}
      >
        <CardDetails />
      </Box>
    </ChakraProvider>
  );
}

export default App;
