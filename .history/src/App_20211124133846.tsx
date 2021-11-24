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
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
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
