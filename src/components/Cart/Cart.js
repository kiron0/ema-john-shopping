import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <div className='btn'>
                <button id='btn1'>Clear Cart <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                <button id='btn2'>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;