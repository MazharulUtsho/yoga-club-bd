import React, { useEffect, useState } from 'react';
import './Products.css';
import logo from '../../logo1.png';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
const Products = () => {
    const [carts, setCart] = useState([]);
    const [newCarts, setNewCarts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    const cartHandler = (cart) => {
        const newCart = [...newCarts, cart];
        setNewCarts(newCart);
    }
    return (
        <div>
            <div className="container">
                <div className="row-1">
                    <div className="col-1">
                        <div className="heading">
                            <img src={logo} alt="" />
                            <h1>YOGA-CLUB-BD</h1>
                        </div>
                        <h2 className='title-1'>Select Yoga Exercise</h2>
                        <div className="cards-info">
                            {
                                carts.map(cart => <Card key={cart.id} cart={cart} cartHandler={cartHandler}></Card>)
                            }
                        </div>
                    </div>
                    <div className="col-2">
                        <Cart newCart={newCarts}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;