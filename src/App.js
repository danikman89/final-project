import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://62c5781fa361f725128546fb.mockapi.io/items')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {data.map((items) => (
              <PizzaBlock key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
