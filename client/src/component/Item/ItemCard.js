import React from 'react';
import styles from './ItemCard.module.css'

//아이템 카드를 구성할 각각의 DOM을 생성하는 컴포넌트
//화면에 보여져야하는 값들을 정리하여 파라미터 값으로 넘겨줄 것

//key는 각 상품마다 고유의 값으로 지정
//이미지 URL, 상품명, 하한가, 시작 시간, 남은 시간을 넣어줄 변수들을 각각의 자리에 지정
function ItemCard({ id, thumbnail, title, rowPrice, startDay, endDay }) {
    return (
        <li className={styles.item_Card} key={id}>
            <img src={thumbnail} className={styles.item_Img} alt="" />
            <p className={styles.item_title}>
                <span>{title}</span>
            </p>
            <p className={styles.item_rowPrice}>하한가 : {rowPrice}</p>
            <p className={styles.item_startDay}>시작일 : {startDay}</p>
            <p className={styles.item_endDay}>마감일 : {endDay}</p>
        </li>
    );
}

export default ItemCard;