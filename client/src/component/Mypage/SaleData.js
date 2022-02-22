import React, { useState, useEffect } from "react";
import styles from "./SaleData.module.css";
import _ from "../../config/env";
import axios from "axios";
import { Link } from 'react-router-dom';

function SaleData() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios
        .get(_.SERVER_URL + `/book/history`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("mba-token"),
          }
        }
        )
        .then(({ data }) => setLists(data.response))
        .catch((err) => { })
    }
    getData();
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.ultitle}>
        <ul>
          <li>번호</li>
          <li>책 이름</li>
          <li>최고응찰가격</li>
          <li>경매마감날짜</li >
        </ul>
      </div>
      {lists && (
        <>
          {lists.map((lists, index) => (
            <div className={styles.ulcontent}>
              <Link className={styles.link} to={`/book/detail/${lists.id}`}>
                <ul>
                  <li>{index + 1}</li>
                  <li>{lists.title}</li>
                  <li>{lists.highPrice}</li>
                  <li>{lists.endDay}</li>
                </ul>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default SaleData;
