
import React, { useEffect, useState } from "react";

const TopCart = () => {
  

  return (
    <span className="cart__icon">
      <span className="count countActive">
        10
      </span>
      <svg xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          fill="#000"
          fillRule="nonzero"
          d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"
        />
      </svg>
      <div class="cart-dropdown">
        <div class="cart-dropdown__header">
          <span class="header__text">My Bag,</span>
          <span class="header__count"> Item: 10</span>
          <span class="header__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              focusable="false">
              <path d="M9.97 8.274L2.335.637.637 2.334 8.274 9.97.637 17.607l1.697 1.697 7.637-7.636 7.636 7.636 1.697-1.697-7.636-7.636 7.636-7.637L17.607.637 9.971 8.274z"></path>
            </svg>
          </span>
        </div>
        <div class="cart-dropdown__items">
                    <>
                      <div class="cart__item">
                        <div class="item__image">
                          <img src="" alt="" />
                        </div>
                        <div class="item__details">
                          <div class="details__price">
                            2000
                          </div>
                          <div class="details__description">dummy</div>
                          <div class="details__info">
                            <span>Qty 10</span>
                          </div>
                        </div>

                        <div class="item__delete-icon">
                          <span
                            class="remove"
                           >
                            REMOVE
                          </span>
                        </div>
                      </div>
                    </>
                
        </div>
        <div class="cart-dropdown__controls">
          <div class="cart-dropdown__subtotal">
            Sub-total
            <span class="subtotal__amount">2000</span>
          </div>
          <div class="cart-dropdown__buttons flex">
            <button class="add btn-effect">VIEW BAG</button>{" "}
            <button class="add btn-effect">CHECKOUT</button>
          </div>
        </div>
      </div>
    </span>
  );
};

export default TopCart;