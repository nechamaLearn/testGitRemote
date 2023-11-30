//add Product component with title price and quantity

import { useState } from 'react';
function Product({ title, price, quantity }) {

    //add button to remove one from the quantity

    const [newQuantity, setNewQuantity] = useState(quantity);

    const removeOne = () => {
        if (newQuantity > 0) {
            setNewQuantity(newQuantity - 1);
        }
    }


    return (
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{newQuantity}</p>
            <button onClick={removeOne}>Remove</button>
        </div>
    )
}

export default Product;