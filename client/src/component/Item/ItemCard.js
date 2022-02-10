import React from 'react';
import {useState} from 'react';
import {useFetch} from './useFetch'l

//화면에 보여져야하는 값들을 정리하여 파라미터 값으로 넘겨줄 것

//key는 각 상품마다 고유의 값으로 지정
//이미지 URL, 브랜드명, 상품명을 넣어줄 변수들을 각각의 자리에 지정
function ItemCard({ data, size }) {
  const [detailFetchUrl, setDetailFetchUrl] = useState(null);
  const [ModalMode, setModalState] = useState(false);
  const handleClick = (hash) => {
    setModalState(!ModalMode); //작업중
    setDetailFetchUrl(
      "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/detail/" +
        hash
    );
  };
  const [detailData, loadingState] = useFetch(detailFetchUrl); //첫 페이지 로딩시부터 데이터요청이 진행되는게 맞는가?
  return (
    <>
      {ModalMode && !loadingState && (
        <DetailPage
          detailData={detailData.data}
          ModalMode={ModalMode}
          setModalState={setModalState}
        ></DetailPage>
      )}
      <Card size={size}>
        <ClickArea onClick={() => handleClick(data.detail_hash)}>
          <IMG size={size} image={data.image} alt={data.alt}>
            <DeliveryBlock>
              <div>새벽배송</div>
              <img style={imgPosition} src="./line.png" alt="line"></img>
              <div>전국택배</div>
            </DeliveryBlock>
          </IMG>

          <ItemTitle>{data.alt}</ItemTitle>
          <ItemDesc>{data.description}</ItemDesc>
        </ClickArea>
        <ItemPrice>{data.s_price ? data.s_price : data.n_price}</ItemPrice>
        {data.s_price && <ItemPriceNormal>{data.n_price}원</ItemPriceNormal>}

        <BadgeWrapper>
          {data.badge &&
            data.badge.map((el, idx) => (
              <Badge key={idx} val={el}>
                {el}
              </Badge>
            ))}
        </BadgeWrapper>
      </Card>
    </>
  );
}

export default ItemCard;