import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Style from "./style";
import "swiper/css/pagination";

export function Slides({ ...props }) {
  return (
    <Style.Container>
      <Swiper
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        {props.listCard.map((item, key) => (
          <SwiperSlide>
            <img
              src={item.imgUrl}
              key={key}
              alt={`${item.imgUrl}${key}`}
              width={"100%"}
              height={"700px"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Style.Container>
  );
}
