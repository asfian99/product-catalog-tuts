import {
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const PriceFilter = () => {
  return (
    <HStack w="40%">
      <NumberInput>
        <NumberInputField bg="white" value={0} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Heading fontSize="lg">~</Heading>

      <NumberInput>
        <NumberInputField bg="white" value={100000} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};

export default PriceFilter;
