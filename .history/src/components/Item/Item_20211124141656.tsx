// Types
import { CartItemType } from "../../App";
//Styles
import { Wrapper } from "../../App.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

export const Item: React.FC<Props> = ({item, addToCart }) => {
  return <Wrapper>
      <img src={item.image} alt={item.title} />
  </Wrapper>
}
