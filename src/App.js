import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDetails } from "./components/";
import theme from ".";
import bgCardMobile from "./images/bg-main-mobile.png";
import bgDesktopMobile from "./images/bg-main-desktop.png";
import { UserCardDetailsContext } from "./context";
import { useState } from "react";

function App() {
  const [userCardDetails, setUserCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    cardVerificationCode: "",
    expMonth: "",
    expYear: "",
  });

  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg={{ sm: bgCardMobile, xl: bgDesktopMobile }}
        backgroundRepeat={{
          base: "repeat-x",
          xl: "repeat-y",
        }}
      >
        <UserCardDetailsContext.Provider
          value={{ userCardDetails, setUserCardDetails }}
        >
          <CardDetails />
        </UserCardDetailsContext.Provider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
