import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import * as Style from "./style";
import { useMediaQuery } from "@react-hook/media-query";

export function Slides({ ...props }) {
  const isTablet = useMediaQuery("(max-width: 960px)");

  return (
    <Style.Container>
      <Swiper
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={isTablet ? 40 : 80}
        slidesPerView={isTablet ? 1 : 3}
        pagination={{ clickable: true }}
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
