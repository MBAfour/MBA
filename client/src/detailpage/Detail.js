import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailBody from './DetailCard';
import {useParams} from 'react-router-dom';

const Book = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {bookId} = useParams(); 
  const Get = () => {
    axios  
    .get(`http://localhost:8080/book/detail/${bookId}`, {
      headers: {
        Authorization : "Bearer " + localStorage.getItem("mba-token"), 
      }
    })
    .then((response) => {
      setData(response.data.response);
      setLoading(true);
    })
    .catch(e => {
      console.error(e);
      setLoading(false);
    });
  };

  useEffect(() => {
    Get();
  },[]);

  return (
        <DetailBody 
          data = {data}
        />
    );
  
}

export default Book;