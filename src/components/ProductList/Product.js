import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Selection from './Product/Selection';
import { useDispatch, useSelector } from 'react-redux';
import { addToPrint, removeFromPrint } from '../../lib/redux/productSlice';

const Product = ({ meta }) => {
  const dispatch = useDispatch();
  const selectedList = useSelector((state) => state.product.printItems);
  const allProducts = useSelector((state) => state.product.allList);

  const index = allProducts.findIndex(
    (item) => item.ProductId === meta.ProductId
  );

  const [selectStatus, setSelectStatus] = useState(allProducts[index].selected);

  useEffect(() => {
    if (selectedList.length === 0) {
      setSelectStatus(false);
    }
    setSelectStatus(allProducts[index].selected);
  }, [selectedList, selectStatus, setSelectStatus, allProducts, index]);

  const selectHandler = () => {
    if (!selectStatus) dispatch(addToPrint(meta));
    if (selectStatus) dispatch(removeFromPrint(meta));

    setSelectStatus(!selectStatus);
  };

  return (
    <Flex
      h="full"
      flexDir="column"
      border="1px"
      borderColor="gray.300"
      borderRadius="xl"
    >
      <Selection selectStatus={selectStatus} selectHandler={selectHandler} />
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
