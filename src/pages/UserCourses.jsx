// components
import DashboardCourses from '../Components/DashboardCourses/DashboardCourses'

export default function UserCourses() {
  return (
    <div>
      <DashboardCourses />
      <DashboardCourses />
      <DashboardCourses />
      <div className='d-flex justify-content-center'>
        <button className='start-btn rounded-pill p-4 mt-50'>ثبت نام در دوره های بیشتر</button>
      </div>
    </div>
  )
}
