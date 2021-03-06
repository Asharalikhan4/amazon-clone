import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';


function Product({title, image, price, rating}){
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        // Dispatch the item in the data layer.
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                // id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };
    return (
        <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map((_, i)=>
                <p>⭐️</p>
                )}
            </div>
        </div>
        <img src= {image}/>
        <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;