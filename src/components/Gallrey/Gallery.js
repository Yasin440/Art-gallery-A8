import React, { useEffect, useState } from 'react';
import Art from '../Art/Art';
import Cart from '../Cart/Cart';
import './Gallery.css'

const Gallery = () => {

    // useState for data count
    const [arts, setArts] = useState([]);

    // useState for add to cart
    const [cart, setCart] = useState([]);

    // useEffect for data load 
    useEffect(() => {
        fetch('./art.json')
            .then(res => res.json())
            .then(data => setArts(data))
    }, [])
    // select for gallery btn handler
    const addToCartHandle = art => {
        const newCart = [...cart, art];
        setCart(newCart);
    }
    return (
        <div className="gallery">
            <div className="arts row row-cols-1 row-cols-md-3 g-4">
                {
                    arts.map(art => <Art
                        key={art._id}
                        art={art}
                        addToCartHandle={addToCartHandle}
                    ></Art>)
                }
            </div>
            <div className="cartWizard">
                <div className='cartHolder'>
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Gallery;