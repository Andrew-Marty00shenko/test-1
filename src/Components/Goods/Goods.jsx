import { Swiper, SwiperSlide } from 'swiper/react';

import Good from "./Good/Good";

import GoodImage from "Assets/images/good-image.png";
import WaterImg from "Assets/images/water.png";
import ColsImg from "Assets/images/cols.png";

import "./Goods.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';

const items = [
    {
        id: 1,
        name: 'Топас-С 4',
        description: 'До 4 человек',
        oldPrice: '86 700 ₽',
        newPrice: '78 030 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '0,8 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '175 л',
        image: GoodImage
    },
    {
        id: 2,
        name: 'Топас-С 4 Пр',
        description: 'До 4 человек',
        oldPrice: '98 300 ₽',
        newPrice: '88 470 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '0,8 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '175 л',
        image: GoodImage
    },
    {
        id: 3,
        name: 'Топас-С 5',
        description: 'До 5 человек',
        oldPrice: '99 500 ₽',
        newPrice: '89 550 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '1 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '220 л',
        image: GoodImage
    },
    {
        id: 4,
        name: 'Топас-С 4',
        description: 'До 4 человек',
        oldPrice: '86 700 ₽',
        newPrice: '78 030 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '0,8 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '175 л',
        image: GoodImage
    },
    {
        id: 5,
        name: 'Топас-С 4 Пр',
        description: 'До 4 человек',
        oldPrice: '98 300 ₽',
        newPrice: '88 470 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '0,8 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '175 л',
        image: GoodImage
    },
    {
        id: 6,
        name: 'Топас-С 5',
        description: 'До 5 человек',
        oldPrice: '99 500 ₽',
        newPrice: '89 550 ₽',
        characteristics1: 'Очистка:',
        characteristics1Desc: '1 м3/сут',
        characteristics2: 'Залповый сброс:',
        characteristics2Desc: '220 л',
        image: GoodImage
    }
];

const Goods = () => {
    const [swiper, setSwiper] = useState(null);

    return <section className="goods">
        <img className="side-image one" src={WaterImg} alt="side" />
        <img className="side-image two" src={ColsImg} alt="side" />

        <h2>
            Вам также могут понравиться
        </h2>

        <div className="goods__list">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={5}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
                onSwiper={swiper => setSwiper(swiper)}
            >
                {items.map(good => {
                    return <SwiperSlide key={good.id}>
                        <Good
                            name={good.name}
                            description={good.description}
                            oldPrice={good.oldPrice}
                            newPrice={good.newPrice}
                            characteristics1={good.characteristics1}
                            characteristics1Desc={good.characteristics1Desc}
                            characteristics2={good.characteristics2}
                            characteristics2Desc={good.characteristics2Desc}
                            image={good.image}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
            <button className="swiper-left-button" onClick={() => swiper.slideNext()}>
                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.60199 3.95758C0.406729 4.15284 0.406729 4.46942 0.60199 4.66468L3.78397 7.84666C3.97923 8.04193 4.29582 8.04193 4.49108 7.84666C4.68634 7.6514 4.68634 7.33482 4.49108 7.13956L1.66265 4.31113L4.49108 1.4827C4.68634 1.28744 4.68634 0.970858 4.49108 0.775596C4.29581 0.580333 3.97923 0.580333 3.78397 0.775596L0.60199 3.95758ZM20.4222 3.81113L0.955543 3.81113L0.955544 4.81113L20.4222 4.81113L20.4222 3.81113Z" fill="white" />
                </svg>
            </button>
            <button className="swiper-right-button" onClick={() => swiper.slidePrev()}>
                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3983 3.95766C20.5936 4.15293 20.5936 4.46951 20.3983 4.66477L17.2164 7.84675C17.0211 8.04201 16.7045 8.04201 16.5093 7.84675C16.314 7.65149 16.314 7.33491 16.5093 7.13965L19.3377 4.31122L16.5093 1.48279C16.314 1.28753 16.314 0.970947 16.5093 0.775684C16.7045 0.580422 17.0211 0.580422 17.2164 0.775684L20.3983 3.95766ZM0.578125 3.81122H20.0448V4.81122H0.578125V3.81122Z" fill="white" />
                </svg>
            </button>
        </div>
    </section>
}

export default Goods;