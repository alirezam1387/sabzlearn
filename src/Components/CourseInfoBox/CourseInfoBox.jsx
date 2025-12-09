// css
import './CourseInfoBox'

function CourseInfoBox({name, info, icon}) {
  return (
    <div className='course-info-box w-100 p-2 d-flex align-items-center gap-2'>
      {icon}
      <div>
        <p className="name">{name}</p>
        <p className="info">{info}</p>
      </div>
    </div>
  )
}

export default CourseInfoBox
