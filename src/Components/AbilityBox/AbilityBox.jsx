// css
import './AbilityBox.css'

export default function AbilitiBox({ title, subtitle, icon, color }) {
  return (
    <div className='ability-box' data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1500">
      <div className="icon-box" style={{ color: color }}>
        <span className='rounded-pill' style={{ background: color }}></span>
        {icon}
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
