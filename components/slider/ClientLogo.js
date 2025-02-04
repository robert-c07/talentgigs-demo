/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ClientLogos = () => {

    const data = [
            {
                img: "1.png",
            },
            {
                img: "2.png",
            },
            {
                img: "3.png",
            },
            {
                img: "4.png",
            },
            {
                img: "5.png",
            },
            {
                img: "6.png",
            },
            {
                img: "7.png",
            },
            {
                img: "8.png",
            }
        ];
    
    
        return (
            <>
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-4">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                prevEl: ".swiper-button-prev-4",
                                nextEl: ".swiper-button-next-4"
                            }}
                            className="swiper-wrapper pb-70 pt-5"
                        >
                            {data.map((item, i) => (
                                <SwiperSlide>
                                    <div className="swiper-slide active">
                                        <div className="card-grid-style-5 hover-up">
                                            <img src={`assets/imgs/page/clientlogos/${item.img}`} alt="clientlogos" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="swiper-button-next swiper-button-next-4" />
                    <div className="swiper-button-prev swiper-button-prev-4" />
                </div>
            </>
        );
};

export default ClientLogos;

