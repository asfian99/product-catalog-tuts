import React from 'react';
import { Box, Flex, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Selection from './Product/Selection';

const Product = ({ meta }) => {
  return (
    <Flex
      h="full"
      flexDir="column"
      border="1px"
      borderColor="gray.300"
      borderRadius="xl"
    >
      <Selection />
      <Image
        src={meta.Image}
        borderTopRadius="lg"
        borderColor="white"
        cursor="pointer"
      />

      <Flex flexDir="column" align="start" m="4">
        <Box>
          <Heading fontSize="lg" fontWeight="bold">
            {meta.ProductId}
          </Heading>
          <Heading fontSize="md" fontWeight="semibold" color="gray.600">
            {meta.Name}
          </Heading>
        </Box>

        <VStack alignItems="start" fontSize="sm" spacing="0" mt="4">
          <Text>Price_ {meta.Price}</Text>
          <Text>
            CT_ {meta.ct} ({meta.MinimumOrder})
          </Text>
          <Text>Size {meta.Size}</Text>
          <Text>Size Adjustment - 2cm Available</Text>
          <Text>Material_{meta.Material}</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Product;
