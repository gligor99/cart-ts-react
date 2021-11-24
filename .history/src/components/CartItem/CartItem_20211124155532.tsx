import React from 'react'
import { CartItemType } from '../../App'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
}

const CartItem: React.FC = () => {
    return (
        <div>
            Cart Item
        </div>
    )
}

export default CartItem
