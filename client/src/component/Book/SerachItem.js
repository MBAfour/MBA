import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BookRegister from "./BookRegister";
import "./Search.scss";


const SearchItem = ({isbn, thumbnail, title, authors, price, publisher}) => {

  return (
    <div className="book-card-container" key={isbn}>
      <CardImg thumbnail={thumbnail} />
      <div className="book-text">
        <div className="book-summary-row">
          <div className="image-url">image link: {thumbnail}</div>
          <div className="book-price">{title}</div>
          <div className="book-publisher">{publisher} / {authors}</div>
        </div>
      </div>
      <Link to={{
        pathname: `/book/${isbn}`,
        state: {
          title: title,
          publisher: publisher,
          authors: authors,
          thumbnail: thumbnail
        }
      }}>
{/*}      <button className="book-submit-button">책 선택</button> {*/}
      </Link>
    </div>
  )
}

// const SearchItem = ({index, thumbnail, title, authors, price}) => {
//   const titles = {title};

//   return (
//     <div className="book-card-container">
//       <CardImg thumbnail={thumbnail}/>
//       <div className="book-text">
//         <h2>{title}</h2>
//         <h5>{authors}</h5>
//         <div className="book-summary-row">
//         </div>
//         <div className="book-price">{`${price}원`}</div>
//       </div>
//       <button className="book-submit-button"onClick={inputData(titles)}>책 선택</button>
//     </div>
//   )
// }

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