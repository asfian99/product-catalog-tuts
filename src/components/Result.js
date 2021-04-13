import { Container, Flex } from "@chakra-ui/layout";
import Count from "./Result/Count";
import Sort from "./Result/Sort";

const Result = () => {
  return (
    <Container maxW="container.xl" mx="auto" my="8">
      <Flex justify="space-between" align="center">
        {/* result count */}
        <Count />
        {/* sorting */}
        <Sort />
      </Flex>
    </Container>
  );
};

export default Result;
