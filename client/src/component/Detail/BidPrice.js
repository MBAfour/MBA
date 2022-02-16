import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const BidPrice = ({increase_price, high_price, price, getPrice}) => {
    

    const increase = () => {
        getPrice(price+increase_price)
    }

    const decrease = () => {
        if(price > high_price + 0){
            getPrice(price - increase_price)
        }
    }

    return (
        <div style={{display:"flex", marginBottom:"20px"}}>
            <Button onClick={decrease}>-</Button>
            <ListValue>{price} 원</ListValue>
            <Button onClick={increase}>+</Button>  
        </div>
    )
}

export default BidPrice

const ListValue = styled.div`
    color: #212121;
    font-size:14px;
    padding:4px 12px;
`;

const Button = styled.button`
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
    background-color:#ededed;
    border-radius:6px;
    border:1px solid #dcdcdc;
    display:inline-block;
    cursor:pointer;
    color:#777777;
    font-family:Arial;
    font-size:12px;
    font-weight:bold;
    padding:6px 12px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;
    &:hover {
        background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	    background-color:#dfdfdf;
    }
`;