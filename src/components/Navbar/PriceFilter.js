import {
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPrice } from '../../lib/redux/productSlice';

const PriceFilter = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const dispach = useDispatch();

  const handleMin = (e) => {
    const value = e.target.value;
    setMin(value);
    dispach(filterPrice({ min: value, max }));
  };
  const handleMax = (e) => {
    const value = e.target.value;
    setMax(value);
    dispach(filterPrice({ min, max: value }));
  };

  return (
    <HStack w="40%">
      <NumberInput defaultValue={0}>
        <NumberInputField bg="white" value={min} onChange={handleMin} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Heading fontSize="lg">~</Heading>

      <NumberInput defaultValue={100000}>
        <NumberInputField bg="white" value={max} onChange={handleMax} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};

export default PriceFilter;
