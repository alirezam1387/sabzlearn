 // swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// componetns
import CourseBox from '../CourseBox/CourseBox'
import TitleBox from '../TitleBox/TitleBox'

// images
import CourseImg from '../../Assets/images/course.png'


// css
import 'swiper/css';

export default function Slider({title, subtitle, color}) {
    return (
        <div className='mt-100'>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}>
                <TitleBox slot="container-start"
                    title={title}
                    subTitle={subtitle}
                    color={color} isLeft isSliderBtn />

                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
                <SwiperSlide><CourseBox title="آموزش پروژه محور NestJS از صفر!"
                    img={CourseImg}
                    subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                    teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                /></SwiperSlide>
            </Swiper>
        </div>
    )
}
