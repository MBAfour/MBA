import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailBody from './DetailCard';
import {useParams} from 'react-router-dom';
import _ from "../../config/env";

const Book = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {bookId} = useParams(); 

  const Get = () => {
    axios  
    .get(_.SERVER_URL + `/book/detail/${bookId}`, {
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