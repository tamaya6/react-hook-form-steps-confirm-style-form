import { React } from "react";
import { Flex, Button, Center, Heading } from "@chakra-ui/react";

import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import showResults from "./components/Result";
import MyForm from "./components/Myform";
import Confirm from "./components/Confirm";

const steps = [
  { label: "Step 1", content: MyForm },
  { label: "Step 2", content: Confirm }
];

function TestComp() {
  const validationSchema = Yup.object().shape({
    inputForm: Yup.array().of(
      Yup.object().shape({
        inputA: Yup.string().required("InputA is a required field."),
        inputB: Yup.string().required("InputB is a required field."),
        inputC: Yup.string().required("InputC is a required field.")
      })
    )
  });

  const myform = useForm({
    resolver: yupResolver(validationSchema)
  });
  const { trigger } = myform;
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  const onClickConfirm = async () => {
    const result = await trigger();
    if (result) {
      nextStep();
    }
  };

  const onSubmit = (data) => {
    nextStep();
    console.log("onSubmit");
    console.log(data);
    showResults(data);
  };

  return (
    <FormProvider {...myform}>
      <form>
        <Flex flexDir="column" w="100%" p={4}>
          {activeStep === 2 ? (
            <Center p={4} flexDir="column">
              <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
              <Button mt={6} size="sm" onClick={reset}>
                Reset
              </Button>
            </Center>
          ) : (
            <Flex width="100%" justify="flex-end">
              {activeStep === steps.length - 1 ? (
                <>
                  <Button
                    mr={4}
                    size="sm"
                    variant="ghost"
                    onClick={prevStep}
                    isDisabled={activeStep === 0}
                  >
                    Prev
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={myform.handleSubmit(onSubmit)}
                  >
                    Send
                  </Button>
                </>
              ) : (
                <>
                  <Button size="sm" onClick={onClickConfirm}>
                    Confirm
                  </Button>
                </>
              )}
            </Flex>
          )}
          <Steps activeStep={activeStep}>
            <Step label="InputForm" key={1}>
              <MyForm />
            </Step>
            <Step label="Confirm&amp;Send" key={2}>
              <Confirm />
            </Step>
          </Steps>
        </Flex>
      </form>
    </FormProvider>
  );
}

export default TestComp;
