import React from 'react'
import { CartItemType } from '../../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = () => {
    return (
        <div>
            
        </div>
    )
}

export default Cart

