'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import styles from './Hero.module.css';
import Header from '../Header/page';

const imgMovie1Url = '/img-hero-1.svg';
const imgMovie2Url = '/img-hero-2.svg';
const imgMovie3Url = '/img-hero-3.svg';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Header isAbsolute />
            <Swiper
                effect="fade"
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className={styles.slide}
                        style={{ backgroundImage: `url(${imgMovie1Url})` }}
                    >
                        <div className={styles.overlay}>
                            <div className={styles.ripple}></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}
                        style={{ backgroundImage: `url(${imgMovie2Url})` }}>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}
                        style={{ backgroundImage: `url(${imgMovie3Url})` }}>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
