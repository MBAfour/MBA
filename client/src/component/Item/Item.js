import React, { Component } from 'react';
import ItemCard from './ItemCard';

class Item extends Component {
    state = {};
    
    //ItemCard 컴포넌트를 render()함수에 호출

    //<ItemCard ImageURL={data.ImageURL} /> 이렇게하면 DOM이 호출되는데,
    //미리 파라미터 값으로 만들어놓은 ImageURL 이라는 속성에 
    //data.ImageURL 값을 넣어주는 식으로 작성하면 
    //데이터가 ItemCard 컴포넌트에 전달

    //ItemCard 컴포넌트를 json 배열만큼 반복시켜 출력하기위해 
    //map()을 사용해 여러개의 데이터를 순차적으로 return
    render() {
        const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
        {Itemcard &&
          Itemcard.map((itemdata) => {
            return (
              <ItemCard
                ImageURL={itemdata.ImageURL}
                BrandName={itemdata.BrandName}
                GoodsName={itemdata.GoodsName}
              />
            );
          })}
      </ul>
    );
    }
}

export default Item;