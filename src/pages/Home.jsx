import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { setCategory, setPageCount } from '../redux/slices/filterSlice';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';

export const Home = () => {
  const { category, sort, pageCount } = useSelector((state) => state.filterSlice);
  const { items, status } = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();

  const getPizzas = async () => {
    dispatch(
      fetchPizzas({
        pageCount,
        sort,
        category,
      }),
    );
    window.scroll(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [category, sort.sort, pageCount]);

  const onChangeCategory = (i) => {
    dispatch(setCategory(i));
  };

  const onChangePage = (num) => {
    dispatch(setPageCount(num));
  };
  return (
    <>
      <div className="content__top">
        <Categories value={category} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading'
          ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination pageCount={pageCount} onChangePage={onChangePage} />
    </>
  );
};
