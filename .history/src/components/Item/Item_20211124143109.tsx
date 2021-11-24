// Types
import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";
//Styles


type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

export const Item: React.FC<Props> = ({ item, addToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </Wrapper>
  );
};
