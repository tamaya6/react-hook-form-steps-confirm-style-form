import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import TestComp from "./TestComp";
import "./styles.css";

// const CustomSteps = {
//   ...Steps,
//   baseStyle: {
//     steps: {
//       // display: "none"
//     }
//   }
// };

const theme = extendTheme({
  components: {
    // Steps: CustomSteps
    Steps
  }
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <TestComp />
    </ChakraProvider>
  );
}
