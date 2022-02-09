import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄 지
      arrows: false, //화살표 바 표시
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 500, // 애니메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true, //마우스가 hover되면 progress bar 의 애니메이션도 멈추도록
    };

    return (
      //사용할 이미지를 Slider 태그 안에 위치시킴
      //절대경로 - img 파일을 public 폴더에 위치 시킨다.
      <Slider {...settings}>
        <img src="../image/banner1.png"/>
        <img src="../image/banner2.png"/>
        <img src="../image/banner3.png"/>
      </Slider>
    );
  }
}

export default SimpleSlider