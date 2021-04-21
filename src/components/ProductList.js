import { Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Product from './ProductList/Product';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.product.list);

  return (
    <Container maxW="container.xl" mx="auto" my="4">
      <SimpleGrid columns={4} spacing={4}>
        {products.map((item) => (
          <Product meta={item} key={item.ProductId} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductList;
