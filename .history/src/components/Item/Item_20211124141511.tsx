// Types
import { CartItemType } from "../../App";
//Styles
import { Wrapper } from "../../App.styles";

type Props = {
  item: CartItemType;
  asddToCart: (clickedItem: CartItemType) => void;
};

export default function Item() {
  return <div></div>;
}
