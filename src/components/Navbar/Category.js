import { useState } from 'react';
import { Select } from '@chakra-ui/select';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../lib/redux/productSlice';

const Category = () => {
  const categories = useSelector((state) => state.product.category);
  const allProduct = useSelector((state) => state.product.allList);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('');

  const handleSelect = async (e) => {
    const selectedCategory = e.target.value;
    setSelected(selectedCategory);

    const newProductList = await allProduct.filter((product) => {
      if (selectedCategory) {
        return product.Category === selectedCategory;
      } else {
        return product.Category;
      }
    });

    dispatch(filterProduct(newProductList));
  };

  return (
    <Select
      placeholder="All Category"
      bg="white"
      w="40%"
      value={selected}
      onChange={handleSelect}
    >
      {categories.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default Category;
