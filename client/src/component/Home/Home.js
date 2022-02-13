import React, { Component } from 'react';
import styles from './Home.module.css'
import axios from 'axios';
import Item from '../../Item/Item';

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
      .get("http://localhost:8080/book/1", {
        headers: {
          Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ0NzE4Njg5LCJleHAiOjE2NDUzMjM0ODl9.7OrR4KA9z9o2kZU0-RLLlJCtxesO-P-E3yYs6I7JYe4`
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
      <div className={styles.contents}>
        <h3>상품 목록</h3>
        <div>
        <Item Itemcard={ItemList}/>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;