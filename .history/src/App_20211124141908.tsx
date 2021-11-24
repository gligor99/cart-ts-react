// Styles
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const addToCart = (clickedItem: CartItemType) => null;
  const removeFromCart = () => null;

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <div>Something went wrong ...</div>;
  }

  return <div className="App">
    <Item />
  </div>;
}

export default App;
