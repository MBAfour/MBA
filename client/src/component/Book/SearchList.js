import React from "react"
import './Search.scss';
import styled from "styled-components";

const SearchList = ({book}) => {
  const {title, author, thumbnail} = book;

  return (
    <div className="search-card-container">
      <CardImg thumbnail={thumbnail} />
      <div className="search-text">
        <h2>{title}</h2>
        <div>{author}</div>
      </div>
    </div>
  );
};
export default SearchList;


const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
`;