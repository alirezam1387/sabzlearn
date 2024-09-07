// tlit 
import { Tilt } from 'react-tilt'

// css 
import './WayBox.css'

export default function WayBox({ title, icon, count, color }) {
  const defaultOptions = {
    reverse: false, 
    max: 35, 
    perspective: 1000, 
    scale: 1.1, 
    speed: 1000, 
    transition: true, 
    axis: null, 
    reset: true, 
    easing: "cubic-bezier(.03,.98,.52,.99)", 
  }

  return (
    <Tilt options={defaultOptions}>
      <a href='#' className='way-box' style={{ background: color }} data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
        <div className="info">
          {icon}
          <h3>{title}</h3>
          <p>{count} دوره</p>
        </div>
      </a>
    </Tilt>

  )
}
