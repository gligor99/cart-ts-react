// Styles
import { useQuery } from "react-query";
import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  return (
    <div className="App">
      <h1>Test</h1>
      <Wrapper />
    </div>
  );
}

export default App;
