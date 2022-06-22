import React from 'react';
import './Checkout.css';
import Subtotal from '../components/Subtotal';
import { useStateValue } from '../StateProvider';
import { SportsBasketball } from '@mui/icons-material';


function Checkout () {

    const [{ user }, dispatchEvent] = useStateValue();

    return (
            <div className='checkout'>
                <div className='checkout_left'>
                    <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg' alt='banner' />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout_title'>Your Cart</h2>
                        {/* Basket items */}
                        {/* Basket items */}
                        {/* Basket items */}
                    </div>
                </div>
                <div className='checkout_right'>
                    <Subtotal />
                </div>
            </div>
    );
}

export default Checkout;