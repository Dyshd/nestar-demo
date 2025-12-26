import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TopPropertyCard from "./TopPropertyCard";

const TrendProperties = () => {
  const [trendProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="trend-properties">
      <Stack className="container">
        {/* HEADER */}
        <Stack className="info-box">
          <Box className="left">
            <span>Top properties</span>
            <p>Check out our Top Properties</p>
          </Box>

          <Box className="right">
            <div className="pagination-box">
              <WestIcon className="swiper-trend-prev" />
              <div className="swiper-trend-pagination" />
              <EastIcon className="swiper-trend-next" />
            </div>
          </Box>
        </Stack>

        {/* CARDS */}
        <Stack className="card-box">
          {trendProperties.length === 0 ? (
            <Box className="empty-list">Trends Empty</Box>
          ) : (
            <Swiper
              className="trend-property-swiper"
              slidesPerView="auto"
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
                clickable: true,
              }}
            >
              {trendProperties.map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="trend-property-slide"
                >
                  <TopPropertyCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrendProperties;
