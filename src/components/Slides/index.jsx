import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import * as Style from "./style";

export function Slides({ ...props }) {
  return (
    <Style.Container>
      <Swiper
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.listCard.map((item, key) => (
          <SwiperSlide>
            <Card
              key={key}
              title={item.title}
              subtitle={item.subtitle}
              info={item.info}
              details={item.details}
              color={item.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Style.Container>
  );
}
