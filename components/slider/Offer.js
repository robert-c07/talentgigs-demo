/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const OfferSlider = () => {

    const data = [
        {
            img: "icons8.png",
            title: "Digital Strategy",
            text: "We help to increases your brand performance "
        },
        {
            img: "icons2.png",
            title: "Social Media Branding",
            text: "We use Social media wisely to attract talent and Customers."
        },
        {
            img: "icons3.png",
            title: "Performance Marketing",
            text: "It helps to track and measure the actions, more effective than traditional marketing."
        },
        {
            img: "icons4.png",
            title: "Employee / Customer Journey",
            text: "We help to showcase employee and customer journeys to increase the brand value"
        },
        {
            img: "icons5.png",
            title: "Brand Awareness Campaign",
            text: "We Make Your Brand Stand Out"
        },
        {
            img: "icons6.png",
            title: "Competitive Benchmarking",
            text: "We help to identify your strong and weak points using competitor analysis."
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            576: {
                              // width: 576,
                              slidesPerView: 2,
                            },
                            768: {
                              // width: 768,
                              slidesPerView: 2,
                            },
                            992 : {
                              slidesPerView: 2,
                            },
                            1200 : {
                                slidesPerView: 2,
                            }
                          }}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
                                        <div className="grid-2-img">
                                            <img src={`assets/imgs/page/homepage1/${item.img}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default OfferSlider;

