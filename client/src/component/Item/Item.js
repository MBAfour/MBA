import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css'
import ItemCard from './ItemCard';

//ItemCard 컴포넌트를 render()함수에 호출

//<ItemCard ImageURL={item.ImageURL} /> 이렇게하면 DOM이 호출되는데,
//미리 파라미터 값으로 만들어놓은 ImageURL 이라는 속성에 
//item.ImageURL 값을 넣어주는 식으로 작성하면 
//데이터가 ItemCard 컴포넌트에 전달

//ItemCard 컴포넌트를 json 배열만큼 반복시켜 출력하기위해 
//map()을 사용해 여러개의 데이터를 순차적으로 return

const Item = ({item, loading}) => {
  return (
    <>
    {
      loading &&
      <div> loading... </div>
    }
    <ul className={styles.item_view}>
      { item &&
      item.map((item) => {
          return (
            <Link className={styles.link} to={`/book/detail/${item.id}` }>
            <ItemCard
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              rowPrice={item.rowPrice}
              startDay={item.startDay}
              endDay={item.endDay}
            />
            </Link>
          );
        })}
    </ul>
    </>
  );  
}
export default Item;