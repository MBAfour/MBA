import React, { Fragment, useEffect, useState } from 'react';
import "antd/dist/antd.min.css";
import axios from 'axios';
import SearchList from './SearchList'
import _ from "../../config/env";
import { Input, Row, Col } from 'antd';

const {Search} = Input

const BookSearch = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const [books, setBooks] = useState();

  const handleButton = async () => {
    try { 
      const response = await axios.get(_.SERVER_URL + `/book/info/search?query=${query}`, {
        params: {
          query: query,
        },
        headers: {
          Authorization : "Bearer " + localStorage.getItem("mba-token"), 
        }
      });
      const { data } = response;
      console.log(data);
      setBooks(data.books);
    } catch (e) {
      console.log("error ", e);
    }
  };

  return (
    <Fragment>
      <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <Search
        placeholder='등록할 책을 검색해보세요!'
        onSearch={(value) => console.log(value)}
        onChange={handleQuery}
        onClick={handleButton}
        style={{width:200}}
        />
      </div>
      
      <div>
      <Row>
        {books && books.map((book) => {
          return (
            <Col xs={24} sm={12} md={6} lg={4} xl={4}>
              <SearchList book={book}></SearchList>;
            </Col>
          );
        })}
      </Row>
      </div>
    </Fragment>
  );
}

export default BookSearch;