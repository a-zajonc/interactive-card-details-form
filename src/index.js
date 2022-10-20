import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "450px",
  lg: "650px",
  xl: "960px",
  "2xl": "1536px",
};

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
  breakpoints,
  components: {
    Input: {
      variants: {
        primary: {
          field: {
            fontSize: "18px",
            fontFamily: "Space Grotesk",
            _placeholder: { color: "#DEDDDF" },
            border: "1px solid",
            color: "#DEDDDF",
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          color: "white",
          bgColor: "#21092F",
          h: "3rem",
        },
      },
    },
  },
});
export default theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
