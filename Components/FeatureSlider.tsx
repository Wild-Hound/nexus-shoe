import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
// @ts-ignore
import styled from "styled-components";
import Image from "next/dist/client/image";
import slideImg from "../public/power-pro-web-banner.jpg";
import slideImg2 from "../public/NS-web-banner2.jpg";
import slideImg3 from "../public/MC-web-banner.jpg";
import slideImg4 from "../public/Justice-Luegue-banner.jpg";

SwiperCore.use([Pagination]);
//

const SliderContent = styled(SwiperSlide)`
  width: 100%;
  min-height: fit-content;
  background-color: #1e272e;
  position: relative;
`;

const FeatureSlider = () => {
  return (
    <Swiper pagination={true} className="mySwiper">
      <SwiperSlide>
        <SliderContent>
          <Image src={slideImg} layout="responsive" />
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <Image src={slideImg2} layout="responsive" />
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <Image src={slideImg3} layout="responsive" />
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <Image src={slideImg4} layout="responsive" />
        </SliderContent>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeatureSlider;
