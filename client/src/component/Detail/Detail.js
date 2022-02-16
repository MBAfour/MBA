import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailBody from './DetailCard';
import {useParams} from 'react-router-dom';
import _ from "../../config/env";

const Book = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {bookId} = useParams(); 
  
  useEffect(() => {
    async function getData() {
    setLoading(true);
    const response = await axios  
    .get(_.SERVER_URL + `/book/detail/${bookId}`, {
      headers: {
        Authorization : "Bearer " + localStorage.getItem("mba-token"), 
      }
    }
    )
    .then(({ data }) => setData(data.response))
    .catch((err) => {})
    setLoading(false);
  }
  getData();
  }, []);

  return (
        <DetailBody 
          id = {data.id}
          title = {data.title}
          publisher = {data.publisher}
          author = {data.author}
          row_price = {data.rowPrice}
          increase_price = {data.increasePrice}
          thumbnail = {data.thumbnail}
          status = {data.status}
          lecture_name = {data.lectureName}
          professor_name = {data.professorName}
          high_price = {data.highPrice}
          seller_id = {data.sellerId}
          start = {data.start}
          end_day = {data.endDay}
        />
  );
}

export default Book;