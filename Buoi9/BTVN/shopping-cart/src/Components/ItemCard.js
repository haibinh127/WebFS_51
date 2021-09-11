import React, { useState } from "react";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";

const ItemCart = (props) => {
    const [value, setValue] = useState(0);
    const [total, setTotal] = useState(props.price);
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">${props.price}/1KG</h5>
                    <div>
                        <button onClick={() => { setValue(value + 1); setTotal(total + 40) }}><MdExposurePlus1 /></button>
                        <h7 style={{ paddingLeft: "10px", paddingRight: "10px" }}>{value}</h7>
                        <button onClick={() => { setValue(value - 1); setTotal(total - 40) }}><MdExposureNeg1 /></button>
                    </div>
                    <div>
                        Total: ${total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;