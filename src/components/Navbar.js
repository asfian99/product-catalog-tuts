import { Box, Container, Flex } from "@chakra-ui/layout";
import Category from "./Navbar/Category";
import PriceFilter from "./Navbar/PriceFilter";
import PrintButton from "./Navbar/PrintButton";
import Search from "./Navbar/Search";

const Navbar = () => {
  return (
    <Box w="full" zIndex="9" position="sticky" top="0">
      <Container maxW="container.xl" mx="auto">
        <Box p="4" bg="gray.200" borderRadius="lg" shadow="md">
          <Flex justify="space-between">
            <Flex gridGap="4">
              {/* Search */}
              <Search />
              {/* Kategori */}
              <Category />
              {/* Price filter */}
              <PriceFilter />
            </Flex>

            <Box>
              {/* Print button */}
              <PrintButton />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
