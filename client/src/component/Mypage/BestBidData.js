import React, { useState, useEffect } from "react";
import styles from "./WishData.module.css";
import _ from "../../config/env";
import axios from "axios";
import { Link } from 'react-router-dom';

function BestBidData() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios
        .get(_.SERVER_URL + `/auction/history`, {
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
          <li>책 번호</li>
          <li>최고응찰가격</li>
        </ul>
      </div>
      {lists && (
        <>
          {lists.map((lists, index) => (
            <div className={styles.ulcontent}>
              <Link className={styles.link} to={`/book/detail/${lists.id}`}>
                <ul>
                  <li>{index + 1}</li>
                  <li>{lists.id}</li>
                  <li>{lists.highPrice}</li>
                </ul>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BestBidData;