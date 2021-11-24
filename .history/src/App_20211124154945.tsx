// Styles
import { AddShoppingCart } from "@mui/icons-material";
import {
  Badge,
  CircularProgress,
  Container,
  Drawer,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { StyledButton, Wrapper } from "./App.styles";
import Cart from "./components/Cart/Cart";
import { Item } from "./components/Item/Item";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce(
      (ack: number, item: { amount: number }) => ack + item.amount,
      0
    );

  const addToCart = (clickedItem: CartItemType) => null;
  const removeFromCart = () => null;

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={function (clickedItem: CartItemType): void {
            throw new Error("Function not implemented.");
          }}
          removeFromCart={function (id: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={8}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={8} md={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
