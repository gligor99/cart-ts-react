import React from "react";
import { CartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (cartItems: CartItemType[]) => {
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <h2>Total: ${calculateTotal(cartItems)}</h2>
    </Wrapper>
  );
};

export default Cart;
