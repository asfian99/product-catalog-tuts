import { useState } from 'react';
import { Input, InputGroup } from '@chakra-ui/input';
import { useDispatch } from 'react-redux';
import { search } from '../../lib/redux/productSlice';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setKeyword(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <InputGroup w="40%">
      <Input
        type="text"
        bg="white"
        value={keyword}
        onChange={handleChange}
        placeholder="Search..."
      />
    </InputGroup>
  );
};

export default Search;
