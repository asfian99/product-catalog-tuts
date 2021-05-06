import { Select } from '@chakra-ui/select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compareD, compareH, compareL } from '../../lib/Compare';
import { filterProduct } from '../../lib/redux/productSlice';

const Sort = () => {
  const products = useSelector((state) => state.product.list);
  const dispatch = useDispatch();
  const [sortOpt, setSortOpt] = useState('');

  function handleChange(e) {
    const selected = e.target.value;
    setSortOpt(selected);

    const newProductsOrder = [...products];
    if (selected === 'higher') {
      newProductsOrder.sort(compareH);
    } else if (selected === 'lower') {
      newProductsOrder.sort(compareL);
    } else {
      newProductsOrder.sort(compareD);
    }

    dispatch(filterProduct(newProductsOrder));
  }

  return (
    <Select
      placeholder="Recommended Product"
      bg="white"
      w="30%"
      value={sortOpt}
      onChange={handleChange}
    >
      <option value="higher">Order With Higher Prices</option>
      <option value="lower">Order With Lower Prices</option>
    </Select>
  );
};

export default Sort;
