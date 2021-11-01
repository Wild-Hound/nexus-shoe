import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
// @ts-ignore
import styled from "styled-components";
import Image from "next/dist/client/image";
import shoe1 from "../public/shoe1.jpg";

const SliderContainer = styled("div")`
  max-width: 1500px;
  margin: auto;
  padding: 2.5em 1em;
  padding-top: 0;
`;

const ProductWrapper = styled("div")`
  min-height: fit-content;
  width: 275px;
  margin: 1.75rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.35s;
  &:hover {
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

const TextContents = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ProductTitle = styled("p")`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
`;

const ProductDisc = styled("p")`
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
`;

const Price = styled("p")`
  font-weight: 600;
  font-size: 1.1rem;
`;

const BuyBtn = styled("button")`
  border: none;
  outline: none;
  background-color: #2c3e50;
  color: white;
  max-width: fit-content;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const TagsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  padding-bottom: 0;
`;

const HeadingWrapper = styled("div")`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  gap: 0.5rem;
  color: #34495e;
  margin-top: 2rem;
  margin-bottom: 1rem;
  &::before,
  &::after {
    content: "";
    width: 75px;
    height: 2px;
    background-color: #95a5a6;
    margin-top: 8px;
  }
`;

interface Props {
  tags?: string[];
}

const ProductsSlideShow: React.FC<Props> = ({ tags }) => {
  const [activeTag, setActiveTag] = useState(0);

  const Tag = styled("button")`
    border: none;
    outline: none;
    background-color: transparent;
    border: ${(props: any) =>
      props.num === activeTag ? "2px solid #b2bec3" : "2px solid transparent"};
    padding: 0.25rem 1rem;
    border-radius: 22px;
    font-size: 0.9rem;
    font-weight: 600;
  `;

  const Tags = () => {
    return (
      <TagsWrapper>
        {tags?.map((tag: string, index: number) => {
          return (
            <Tag
              key={index}
              num={index}
              onClick={() => {
                setActiveTag(index);
              }}
            >
              {tag}
            </Tag>
          );
        })}
      </TagsWrapper>
    );
  };

  const ProductSlider = () => {
    return (
      <SliderContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          className="mySwiper"
          modules={[Navigation]}
          navigation
        >
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <ProductWrapper>
              <Image src={shoe1} layout="responsive" />
              <TextContents>
                <ProductTitle>POWER</ProductTitle>
                <ProductDisc>
                  Power Prime Walk Slip-On Sneaker for Men
                </ProductDisc>
                <Price>TK: 699</Price>
                <BuyBtn>SHOP NOW</BuyBtn>
              </TextContents>
            </ProductWrapper>
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
    );
  };

  return (
    <div>
      <HeadingWrapper>New Arrival</HeadingWrapper>
      {tags && Tags()}
      {ProductSlider()}
    </div>
  );
};

export default ProductsSlideShow;
