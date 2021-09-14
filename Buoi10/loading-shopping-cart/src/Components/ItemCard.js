import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ClipLoader from 'react-spinners/ClipLoader';

const ItemCart = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [value, setValue] = useState(0);

    const onHandleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setValue(value + 1);
        }, 2000);
    }

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">${props.price}/1KG</h5>
                    <button className="btn btn-success" onClick={onHandleClick}>Add to card</button>
                </div>
            </div>
            <div>
                <div> {props.title} <FaShoppingCart />: {
                    isLoading ? (<ClipLoader size={15} color={'#F37A24'} />) : (value)
                } Kilograms</div>
            </div>
        </div>
    )
}

export default ItemCart;