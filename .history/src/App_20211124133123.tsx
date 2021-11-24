// Styles
import { Wrapper } from "./App.styles";

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  } catch (error) {
    console.log(error);
    
  }
};

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Wrapper />
    </div>
  );
}

export default App;
