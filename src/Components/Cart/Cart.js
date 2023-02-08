import React from 'react';
import './Cart.css';
import personalImg from '../../utsho.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const newCart = props.newCart;
    let totalTime = 0;
    for (const product of newCart) {
        let time = parseFloat(product.time);
        totalTime = totalTime + time;
    }
    return (
        <div className='full-cart'>
            <div className="cart-info-all">
                <div className="personal-info">
                    <img src={personalImg} alt="" />
                    <div className="name-address">
                        <h2>Md.Mazharul Islam</h2>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="weight-height">
                    <div className="weight">
                        <h2>63kg</h2>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <h2>5.7</h2>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <h2>25yrs</h2>
                        <p>Age</p>
                    </div>
                </div>
                <div className="break-info">
                    <h2>Break Time</h2>
                    <div className="break-time">
                        <button>30s</button>
                        <button>40s</button>
                        <button>50s</button>
                        <button>60s</button>
                        <button>70s</button>
                    </div>
                </div>
                <div className="exercise-details">
                    <h2>Yoga Total Time:</h2>
                    <div className="yoga-time">
                        <h3>Yoga Time:</h3>
                        <p>{totalTime}</p>
                    </div>
                    <div className="breaks-time">
                        <h3>Break Time:</h3>
                        <p>0</p>
                    </div>
                </div>
                <button className='btn-2'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;