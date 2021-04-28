import { Container, Heading } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Container mx="auto" maxW="container.xl">
      <Heading
        fontSize="5xl"
        margin="4"
        fontFamily="serif"
        fontWeight="normal"
        color="purple.700"
      >
        2021 Spring& Summer SHISEI STOCK BOOK
      </Heading>
    </Container>
  );
};

export default Header;
