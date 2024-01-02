import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import cssStyle from "../css/Banner.module.css";
import BannerList from "../components/BannerList";
import { bannerData } from "../data";
import { useState } from "react";

export default function Banner() {
  let [List] = useState(bannerData);
  return (
    <div className={cssStyle.sec1}>
      <h2>banner1</h2>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        {List.map((bannerList) => {
          return (
            <SwiperSlide key={bannerList._id}>
              <BannerList bannerList={bannerList} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
