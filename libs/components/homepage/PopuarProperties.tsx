import { Box, Link, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PopularPropertyCard from "./PopularPropertyCard";

type Props = {
  initialInput?: number[];
};

const PopularProperties = ({
  initialInput = [1, 2, 3, 4, 5, 6, 7],
}: Props) => {
  const [popularProperties] = useState<number[]>(initialInput);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        {/* HEADER */}
        <Stack className="info-box">
          <Box className="left">
            <span>Popular properties</span>
            <p>Popularity is based on views</p>
          </Box>

          <Box className="right">
            <div className="more-box">
              <Link href="/property" underline="none">
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>

        {/* CARDS */}
        <Stack className="card-box">
          <Swiper
            className="popular-property-swiper"
            slidesPerView="auto"
            spaceBetween={25}
          >
            {popularProperties.map((_, index) => (
              <SwiperSlide
                key={index}
                className="popular-property-slide"
              >
                <PopularPropertyCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;
