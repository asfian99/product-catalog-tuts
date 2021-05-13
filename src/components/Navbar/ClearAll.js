import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ClearPrintList } from '../../lib/redux/productSlice';

const ClearApll = () => {
  const dispatch = useDispatch();
  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.50' }}
      mr="4"
      onClick={() => dispatch(ClearPrintList())}
    >
      ClearAll
    </Button>
  );
};

export default ClearApll;
