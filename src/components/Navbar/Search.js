import { Input, InputGroup } from "@chakra-ui/input";

const Search = () => {
  return (
    <InputGroup w="40%">
      <Input type="text" bg="white" placeholder="Search..." />
    </InputGroup>
  );
};

export default Search;
