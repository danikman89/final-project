import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/empty-basket.png';

export const BasketEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пустая
        <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={image} alt="Empty cart" />
      <Link class="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
