import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import formData from "./Formdata";

export default function MyForm() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <Heading>InputForm Page</Heading>
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
          <HStack>
            <FormControl isInvalid={!!errors.inputForm?.[i]?.inputA}>
              <FormLabel>Input A</FormLabel>
              <Input
                {...register(`inputForm.${i}.inputA`)}
                placeholder="Basic usage"
                value={item.code} //debug
              />
              <FormErrorMessage>
                {errors.inputForm?.[i]?.inputA?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.inputForm?.[i]?.inputB}>
              <FormLabel>Input B</FormLabel>
              <Input
                {...register(`inputForm.${i}.inputB`)}
                placeholder="Basic usage"
                value={item.tasks[0].id} //debug
              />
              <FormErrorMessage>
                {errors.inputForm?.[i]?.inputB?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.inputForm?.[i]?.inputC}>
              <FormLabel>Input C</FormLabel>
              <Input
                {...register(`inputForm.${i}.inputC`)}
                placeholder="Basic usage"
              />
              <FormErrorMessage>
                {errors.inputForm?.[i]?.inputC?.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>
        </VStack>
      ))}
    </>
  );
}
