import React, { Component, useEffect, useState } from 'react';
import styled from "styled-components";
import BidPrice from './BidPrice';
import Timer from './Timer';
import axios from 'axios';

const TopBody = (props) => {

    const id = props.id;
    const title = props.title;
    const publisher = props.publisher;
    const author = props.author;
    const row_price = props.row_price;
    const increase_price = props.increase_price;
    const thumbnail = props.thumbnail;
    const status = props.status;
    const lecture_name = props.lecture_name;
    const professor_name = props.professor_name;
    const seller_id = props.seller_id;
    const start = props.start;
    const end_day = props.end_day;
    const high_price = props.high_price;

    const [price, setPrice] = useState(0);  // 자식으로 부터 high_price를 전달받기 위함

    useEffect(() => {
       if(high_price != 'undefined' && high_price != null){
            setPrice(high_price);
       }
   }, [high_price])

    const getPrice = (price) => {
        setPrice(price);
    }

    const Bid = () => {             // 책 id로 해당 책에 입찰 정보 가져옴
        axios
        .patch(`http://localhost:8080/auction/${id}`, {
          "bidPrice" : price
        }, {
          headers: {
            Authorization : "Bearer " + localStorage.getItem("mba-token"), 
          }
        }
        )
        .then((res) => {
            if(res.data.success){
                console.log(res.data);
                window.location.reload();
                alert("응찰 성공.");
            } else{
                alert("응찰 실패: 더 높은 금액으로 입찰해주세요.");;
            }
        })
        ;
    }

    const Wish = () => {
        axios
        .post(`http://localhost:8080/wish/${id}`, {
          
        }, {
          headers: {
            Authorization : "Bearer " + localStorage.getItem("mba-token"), 
          }
        }
        )
        .then((res) => {
            console.log(res.data);
                if(res.data.success){
                   alert("위시리스트 등록 성공");
                } else{
                    alert("이미 위시리스트에 등록된 삼품입니다.");;
                }
        })
        ;


    }

    return (
        <div style={{width:"1024px", height :"560px", margin:"0 auto"}}>
            <ProductInfo>
                <ImageBox>
                    <img style={{width:"428px", height:"428px"}} src={thumbnail} alt="이미지"/>
                </ImageBox>
                <Info>
                    <TitleInfo>
                        <Title>{title}</Title>
                         <Publisher>{publisher} / {author}</Publisher>                        
                    </TitleInfo>
                    <Grayinfo>
                        <GrayLeft>
                            <GrayBox>            
                                <Num><Timer
                                    EndTime = {end_day}
                                /></Num>
                            </GrayBox>
                        </GrayLeft>
                    </Grayinfo>
                    <StateInfo>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>상품상태</ListName>
                            <ListValue>
                                {status}
                            </ListValue>
                        </div>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>강의명</ListName>
                            <ListValue>{lecture_name}</ListValue>
                        </div>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>강의교수</ListName>
                            <ListValue>{professor_name}</ListValue>
                        </div>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>시작가 / 증액가</ListName>
                            <ListValueLocation>
                                {row_price}원 / {increase_price}원
                            </ListValueLocation>
                        </div>
                        <div style={{display:"flex", marginBottom:"24px"}}>
                            <ListName>현재 입찰액</ListName>
                            <BidPrice
                                increase_price = {increase_price}
                                high_price = {props.high_price}
                                price = {price}
                                getPrice = {getPrice}
                            />
                        </div>
                    </StateInfo>
                    <ButtonInfo>
                        <Button onClick={Wish}>
                            위시리스트
                        </Button>
                        <Button2>채팅하기</Button2>
                        <Button3 onClick={Bid}>
                            응찰하기
                        </Button3>
                   
                    </ButtonInfo>
                </Info>
                
            </ProductInfo>
        </div>
    )
}

const ProductInfo = styled.div`
    display:flex;
    padding: 30px 0px;
`;

const ImageBox = styled.div`
    width: 428px;
    height: 428px;
`;

const Info = styled.div`
    width: 554px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
`;

const TitleInfo = styled.div`
    margin-left: 40px;
    border-bottom: 1px solid #EEEEEE;
    width: 100%;
    height: 128px;
    padding-bottom: 5px;
`;

const Title = styled.div`
    font-size: 40px;
    margin-bottom: 9px;
    font-weight: 600;
    line-height: 1.4;
`;

const Publisher = styled.div`
    margin-left: 6px;
    font-size: 20px;
    font-weight: 500;
`;

const Grayinfo = styled.div`
    width: 554px;
    margin: 15px 0px 25px 40px;
    display:flex;
    justify-content: space-between;
    align-items: center;

`;

const GrayLeft = styled.div`
    display:flex;
    
    div::after {
        content:"";
        width: 1px;
        height: 12px;
        border-right: 1px solid rgb(238, 238, 238);
        margin: 0px 10px 0px 10px;
    };
    div:last-child::after {
        content:none;
    }
`;

const GrayBox = styled.div`
    color: rgb(204, 204, 204);
    display:flex;
    align-items: center;
    justify-contents: center;

`;

const SellerBtn = styled.button`
    color: rgb(204, 204, 204);
    font-size: 16px;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
`;


const Num = styled.span`
    font-size: 16px;
    color: #CCCCCC;
`;

const StateInfo = styled.div`
    width: 100%;
    margin-left: 40px;
`;

const ListName = styled.div`
    position: relative;
    color: rgb(153, 153, 153);
    font-size:14px;
    padding-left: 15px;
    width: 120px;

    ::before {
        position: absolute;
        top: 7px;
        left: 6px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: rgb(204, 204, 204);
        content: "";
    };

`;

const ListValue = styled.div`
    color: #212121;
    font-size:14px;
`;

const ListValueLocation = styled(ListValue)`
    color: rgb(98, 177, 217);
    display:flex;
`;

const ButtonInfo = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 554px;
    height: 56px;
    align-items: center;
`;

const Button = styled.button`
    background: rgb(204, 204, 204);
    color: rgb(255, 255, 255);
    border: none;
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    margin: 0px 10px 0px 40px;
    border-radius: 22px;
    &:hover {
        box-shadow: 1px 1px 20px #ddd;
    }
`;

const Button2 = styled.button`
    background: rgb(255, 164, 37);
    border: 1px solid rgb(243, 150, 20);
    color: rgb(255, 255, 255);
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    margin-right: 10px;
    border-radius: 22px;
    &:hover {
        box-shadow: 1px 1px 20px #ddd;
    }
`;

const Button3 = styled.button`
    background: rgb(247, 0, 0);
    border: 1px solid rgb(223, 0, 0);
    color: rgb(255, 255, 255);
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    border-radius: 22px;
    &:hover {
        box-shadow: 1px 1px 20px #ddd;
    }
`;

const Btngap = styled.span`
    margin-left: 5px;
`;

export default TopBody
