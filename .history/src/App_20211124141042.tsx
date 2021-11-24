// Styles
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";

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
  const addToCart = () => null;
  const removeFromCart = () => null;

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <div>Something went wrong ...</div>;
  }

  return <div className="App"></div>;
}

export default App;
