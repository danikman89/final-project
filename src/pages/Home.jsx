import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setCategory } from '../redux/slices/filterSlice';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';

export const Home = () => {
  const { category, sort } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https:62c5781fa361f725128546fb.mockapi.io/items?page=${page}&limit=4&${
          category > 0 ? `category=${category}` : ''
        }&sortBy=${sort.sort}&order=desc`,
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sort.sort, page]);

  const onChangeCategory = (i) => {
    dispatch(setCategory(i));
  };

  return (
    <>
      <div className="content__top">
        <Categories value={category} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : data.map((items) => <PizzaBlock key={items.id} {...items} />)}
      </div>
      <Pagination onChangePage={(num) => setPage(num)} />
    </>
  );
};
