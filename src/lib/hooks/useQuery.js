import { useEffect } from 'react';
import Papa from 'papaparse';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, addProducts } from '../redux/productSlice';

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3ceNZgUSD2CPIpLrTDD9MDlchO-xuBTX6icW2sWN4gVkuYpYVTQHUl9ZSfGfn8VQigUeyr4Eer9HH/pub?gid=1032849779&single=true&output=csv';

const useQuery = () => {
  const products = useSelector((state) => state.product.list);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (result) => {
        result.data.map((item) => {
          dispatch(
            addProducts({
              ...item,
              ProductId: item.ProductCode + item.ProductVariant,
              selected: false,
            })
          );

          dispatch(addCategory(item.category));
          return 0;
        });
      },
      error: (err) => {
        console.log(err);
        return err;
      },
    });
  }, [dispatch]);

  return products;
};

export default useQuery;
