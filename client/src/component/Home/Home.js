import React, { Component } from 'react';
import styles from './Home.module.css'
import axios from 'axios';
import Item from '../Item/Item';
import _ from "../../config/env";

//데이터를 주고 받고 저장하며, Item.js와 ItemCard.js의
//데이터 변화를 연결시켜주는 중심 컴포넌트
class Home extends Component {

  // 제일 common한 state값 초기 셋팅
  state = {
    loading: false,
    ItemList: [] // 처음 Itemlist는 있는 상태로 기획 []
  };

  loadItem = async () => {
    // Json Data 불러오기
    axios // axios를 이용해 json을 가져온다음
      .get(_.SERVER_URL + "/book/1", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("mba-token"),
        }
      })
      .then(({ data }) => {
        // data라는 이름으로 json 파일에 있는 값에 state값을 바꿔준다.
        this.setState({
          loading: true, // load되었으니 true,
          ItemList: data.response.content // 비어있던 Itemlist는 data에 response를 찾아넣어준다.
        });
      })
      .catch(e => {
        // json이 로드되지않은 시간엔
        console.error(e); // 에러표시
        this.setState({
          loading: false // 이때는 load 가 false 유지
        });
      });
  };

  componentDidMount() {
    this.loadItem();
  }

  render() {
    const { ItemList } = this.state;
    console.log(ItemList);
    return (
      <div className={styles.main}>
        <div className={styles.contents}>상품 목록</div>
        <Item Itemcard={ItemList}/>
      </div>
    );
  }
}

export default Home;