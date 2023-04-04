import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';

const CartWidget = () => {
  //la lógica va siempre antes del return
    return (
    <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
        <div className="qty-display">4</div>
    </div>
    );
};

export default CartWidget;