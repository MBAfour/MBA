import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'
import axios from 'axios';
import Item from '../Item/Item';
import Paging from './Paging';
import _ from "../../config/env";


const Home = () => {

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios
      .get(_.SERVER_URL + "/book/all", {
        headers: {
          Authorization : "Bearer " + localStorage.getItem("mba-token"), 
        }
      });
      setItem(response.data.response);
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log(item);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  function currentPosts(tmp) {
    let currentPage = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div className={styles.main}>
        <div className={styles.contents}>상품 목록</div>
        <Item item={currentPosts(item)} loading={loading}/>
        <Paging itemsPerPage={itemsPerPage} totalPosts={item.length} paginate={setCurrentPage}></Paging>
    </div>
  );

}

export default Home;