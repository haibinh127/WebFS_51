import React, { useState } from "react";
import ItemCart from "./ItemCard";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fruitJson from '../data.json'

const Home = () => {

    const [fruitData, setFruitData] = useState(fruitJson);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div>
            <h1 style={{paddingTop:"50px"}} className="text-center">My Cart</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {fruitData.map((item, index) => {
                        return (
                            <ItemCart img={item.img} title={item.title} desc={item.desc} price={item.price} />
                        )
                    })}
                </div>
                <div>
                    <h5>TotalPrice: </h5>
                </div>
            </section >
        </div >
    )
}

export default Home;