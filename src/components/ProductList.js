import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Product from "./ProductList/Product";

const ProductList = () => {
  return (
    <Container maxW="container.xl" mx="auto" my="4">
      <SimpleGrid columns={4} spacing={4}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </SimpleGrid>
    </Container>
  );
};

export default ProductList;
