import React from "react";
import { Box, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import Selection from "./Product/Selection";

const Product = () => {
  return (
    <Flex
      h="full"
      flexDir="column"
      border="1px"
      borderColor="gray.300"
      borderRadius="xl"
    >
      <Selection />
      <Image borderTopRadius="lg" borderColor="white" cursor="pointer" h="32" />

      <Flex flexDir="column" align="start" m="4">
        <Box>
          <Heading fontSize="lg" fontWeight="bold">
            151776LB
          </Heading>
          <Heading fontSize="md" fontWeight="semibold" color="gray.600">
            アミカル　プルオーバー
          </Heading>
        </Box>

        <VStack alignItems="start" fontSize="sm" spacing="0" mt="4">
          <Text>Price_ ¥4,800.00</Text>
          <Text>CT_ 24 (1)</Text>
          <Text>Size_ 総丈：５２ｃｍ　　身幅：６５ｃｍ</Text>
          <Text>Size Adjustment - 2cm Available</Text>
          <Text>Material_ 裄丈：４８ｃｍ　　綿　１００％　　＜ｃｈ＞</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Product;
