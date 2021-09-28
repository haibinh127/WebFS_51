import React from 'react';
import { Tshirt } from './Tshirt';

export const TshirtList = () => {

    const data = [
        {
            id: 1,
            name: "red t-shirt",
            price: 10.99
        },
        {
            id: 2,
            name: "green t-shirt",
            price: 11.99
        },
        {
            id: 3,
            name: "blue t-shirt",
            price: 12.99
        }
    ]

    return (
        <div>
            {
                data.map(item => (
                    <Tshirt name={item.name} price={item.price} key={item.id}></Tshirt>
                ))
            }
        </div>
    )
}