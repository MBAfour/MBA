import React, { Component } from 'react';
import styles from './Item.module.css'
import ItemCard from './ItemCard';

//ItemCard 컴포넌트를 render()함수에 호출

//<ItemCard ImageURL={data.ImageURL} /> 이렇게하면 DOM이 호출되는데,
//미리 파라미터 값으로 만들어놓은 ImageURL 이라는 속성에 
//data.ImageURL 값을 넣어주는 식으로 작성하면 
//데이터가 ItemCard 컴포넌트에 전달

//ItemCard 컴포넌트를 json 배열만큼 반복시켜 출력하기위해 
//map()을 사용해 여러개의 데이터를 순차적으로 return

class Item extends Component {
  id = 1;
  state = {};

  render() {
    const { Itemcard } = this.props;
    return (
      <ul className={styles.item_view}>
        {Itemcard &&
          Itemcard.map((itemdata, insertIndex) => {
            return (
              <ItemCard
                key={insertIndex} //index를 삽입하여 key값으로 사용
                thumbnail={itemdata.thumbnail}
                title={itemdata.title}
                rowPrice={itemdata.rowPrice}
                startDay={itemdata.startDay}
                endDay={itemdata.endDay}
              />
            );
          })}
      </ul>
    );
  }
}
export default Item;