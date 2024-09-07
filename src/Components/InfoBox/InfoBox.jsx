// css
import './InfoBox.css'

export default function InfoBox({ title, data, icon, color }) {
  return (
    <div className='info-box d-flex align-items-center' style={{ background: color }} data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">
      <div className="icon-box d-flex align-items-center justify-content-center">
        {icon}
      </div>
      <div className="infos d-flex row-gap-1">
        <span className="title">{title}</span>
        <span className="data">{data}</span>
      </div>
    </div>
  )
}
