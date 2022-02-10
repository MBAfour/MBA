import React, { Component } from 'react';
import styles from './Home.module.css'
import Item from './Item/Item';
import axios from "axios"

class Home extends Component {
    state = {
        loading: false,
        ItemList: [] //비어있는 배열
    }

    //데이터는 axios.get으로 요청해 .then으로 응답값을 받아올 수 있고, 
    //받아온 data.Item 로 만들어놓은 ItemList 배열 state값을 변경
    loadItem = async () => {
        axios
          .get("./SearchJson.json")
          .then(({ data }) => {
            this.setState({ 
              loading: true,
              ItemList: data.Item
            });
          })
          .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
            this.setState({  
              loading: false
            });
          });
      };

      componentDidMount() {
        this.loadItem();  // loadItem 호출
      }
    
    render() {
        const { ItemList } = this.state;
        console.log(ItemList);

        return (
            <div className={styles.main}>
                <div className={styles.contents}>
                   <h2>상품 목록</h2>
                    <Item Itemcard={ItemList} />
                </div>
            </div>
        );
    }
}

export default Home;