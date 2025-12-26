import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TopAgentCard from "./TopAgentCard";


type Props = {
    initialInput?: number[];
};

const TopAgents = ({
    initialInput = [1, 2, 3, 4, 5, 6, 7],
}: Props) => {
    const [topAgents] = useState<number[]>(initialInput);

    return (
        <Stack className={"top-agents"}>
            <Stack className={"container"}>
                <Stack className="info-box">
                    <Box className={"left"}>
                        <span>Top Agents</span>
                        <p>Our Top Agents always to save you</p>
                    </Box>
                    <Box className={"right"}>
                        <div className={"more-box"}>
                            <span>See All Agents</span>
                            <img src="/img/icons/rightup.svg" alt="" />
                        </div>
                    </Box>
                </Stack>
                <Stack className="wrapper">


                    <Box className="card-wrapper">
                        <Swiper
                            className="top-agents-swiper"
                            slidesPerView={"auto"}
                            spaceBetween={29}
                            navigation={{
                                nextEl: ".swiper-agents-next",
                                prevEl: ".swiper-agents-prev",
                            }}
                        >
                            {topAgents.map((agent, index) => (
                                <SwiperSlide className="top-agents-slide" key={index}>
                                    <TopAgentCard />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                    <Box className="switch-btn swiper-agents-prev">
                        <ArrowBackIosNewIcon />
                    </Box>

                    <Box className="switch-btn swiper-agents-next">
                        <ArrowBackIosNewIcon />
                    </Box>
                </Stack>


            </Stack>
        </Stack>
    )
}

export default TopAgents