import { Text } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';

const Count = () => {
  const products = useSelector((state) => state.product.list);

  return <Text>Result : {products.length}</Text>;
};

export default Count;
