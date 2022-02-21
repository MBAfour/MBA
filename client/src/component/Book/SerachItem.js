import React from "react";
import styled from "styled-components";
import "./Search.scss";

const SearchItem = ({key, thumbnail, title, authors, price}) => {
  return (
    <div className="book-card-container" key={key}>
      <CardImg thumbnail={thumbnail}/>
      <div className="book-text">
        <h2>{title}</h2>
        <h5>{authors}</h5>
        <div className="book-summary-row">
        </div>
        <div className="book-price">{`${price}원`}</div>
      </div>
    </div>
  )
}

export default SearchItem;


const CardImg = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;-webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;