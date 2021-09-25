import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    //for loop for count on Cart
    let totalPrice = 0;
    for (const art of cart) {
        const newTotal = totalPrice + parseFloat(art.price);
        totalPrice = newTotal;
    }
    return (
        <div className='cart'>
            <div className="cartTitle">
                <h2>Selected Art Summary</h2>
                <h6>Art Added: <span>{cart.length}</span></h6>
            </div>
            <div className="cartCal">
                <div className="cartCalItem"><p>Total:</p><p>$ {totalPrice.toFixed(2)}</p></div><hr />
            </div>
            <div className="artList">
                <h6>Added ART...</h6>
                <div>
                    <ul>
                        {
                            cart.map(art => <small><li>{art.artName}</li><hr /></small>)
                        }
                    </ul>
                </div>
            </div>
            <button type='button'><span>Review Your Order</span></button>
        </div>
    );
};

export default Cart;