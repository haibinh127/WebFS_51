import React, { useEffect, useState } from "react";
import ItemCart from "./ItemCard";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [fruitData, setFruitData] = useState(null);

    const getData = () => {
        fetch('./data.json')
            .then((response) => {
                return response.json();
            })
            .then((fruit) => {
                setFruitData(fruit);
                setTimeout(() => {
                    setIsLoading(false);
                }, 5000);
            })
            .catch((error) => console.log("Error"));
    }

    useEffect(() => {
        getData();
    }, [])

    if (!isLoading) {
        return (
            <div>
                <h1 style={{ paddingTop: "50px" }} className="text-center">My Cart</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {fruitData.map((item, index) => {
                            return (
                                <ItemCart key={index} img={item.img} title={item.title} desc={item.desc} price={item.price} />
                            )
                        })}
                    </div>
                </section >
            </div >
        )
    }

    return (
        <div>
            {
                <ClimbingBoxLoader size={50} color="#F37A24" />
            }
        </div >
    )
}

export default Home;