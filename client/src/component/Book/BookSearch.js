import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';
import SearchItem from './SerachItem'
import _ from "../../config/env";
import { Input, Row, Col } from 'antd';
import "antd/dist/antd.min.css";

import BookRegister from '../component/Book/BookRegister'


const { Search } = Input;

const BookSearch = (props) => {
  const [query, setQuery] = useState('');
  const [searchBook, setSearchBook] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    handleButton();
  }, []);

  const handleButton = () => {
    const response = axios.get(_.SERVER_URL + `/book/info/search?query=${query}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("mba-token"),
      }
    })
      .then((response) => {
        const allBooks = response.data.response;
        setSearchBook(allBooks);
        console.log(allBooks);
      })
      .catch(error => console.error(`Error : ${error}`));
  }

  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <Search
          placeholder='등록할 책을 검색해보세요!'
          onSearch={(value) => console.log(value)}
          onChange={handleQuery}
          onClick={handleButton}
          style={{ width: 200 }}
        />
      </div>

      <div>
        <Row>
          {searchBook && searchBook.map((book, index) => {
            return (
              <Col xs={20} sm={8} md={5} lg={4} xl={4}>
                <SearchItem
                  props
                  key={index}
                  thumbnail={book.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  publisher={book.publisher}
                  price={book.price}
                />
              </Col>
            );
          })}
        </Row>
      </div>

      <BookRegister props />
    </Fragment>
  );
}

export default BookSearch;