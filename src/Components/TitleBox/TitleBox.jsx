// slider
import { useSwiper } from 'swiper/react';

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// css
import './TitleBox.css'

export default function TitleBox({ color, title, subTitle, isLeft, children, isSliderBtn }) {

  const swiper = useSwiper()

  return (
    <>
      <div className="title-box d-flex justify-content-between" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
        <div className="right">
          <div className="info">
            <span style={{ background: color, boxShadow: `0px 0px 5px 4px ${color}` }}></span>
            <h2>{title}</h2>
          </div>
          <p className="subtitle">{subTitle}</p>
        </div>
        {isLeft && <div className="left">{children}</div>}
        {isSliderBtn && isLeft && (
          <div className='icons-btn-div'>
            <button onClick={() => swiper.slidePrev()} className="icon-btn"><IoIosArrowForward /></button>
            <button onClick={() => swiper.slideNext()} className="icon-btn"><IoIosArrowBack /></button>
          </div>
        )}
      </div>
    </>
  )
}
