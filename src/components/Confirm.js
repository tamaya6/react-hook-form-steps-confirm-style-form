import { useFormContext } from "react-hook-form";
import { Heading, VStack, Flex, Box, Text } from "@chakra-ui/react";

import formData from "./Formdata";

export default function Confirm() {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <>
      <Heading>Confirm Page</Heading>
      {formData.map((item, i) => (
        <VStack
          key={i}
          shadow="md"
          borderWidth="1px"
          alignItems="start"
          padding={4}
          my={2}
          mx={2}
        >
          <Heading size="md">{item.code}</Heading>
          <Flex w="100%">
            <Box w="100%">
              <Heading size="sm">Input A</Heading>
              <Text>{values.inputForm?.[i]?.inputA}</Text>
            </Box>
            <Box w="100%">
              <Heading size="sm">Input B</Heading>
              <Text>{values.inputForm?.[i]?.inputB}</Text>
            </Box>
            <Box w="100%">
              <Heading size="sm">Input C</Heading>
              <Text>{values.inputForm?.[i]?.inputC}</Text>
            </Box>
          </Flex>
        </VStack>
      ))}
    </>
  );
}
