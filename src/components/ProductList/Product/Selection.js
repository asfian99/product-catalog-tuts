import { Button } from '@chakra-ui/button';
import React from 'react';

const Selection = ({ selectStatus, selectHandler }) => {
  return (
    <Button
      pos="absolute"
      rounded="full"
      p="0"
      ml="2"
      mt="2"
      colorScheme="blue"
      bg={selectStatus ? 'blue.800' : 'blue.300'}
      variant={selectStatus ? 'solid' : 'outline'}
      size="sm"
      fontSize="md"
      opacity="40%"
      _hover={{ opacity: '100%' }}
      onClick={() => selectHandler()}
    ></Button>
  );
};

export default Selection;
