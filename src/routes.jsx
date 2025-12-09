// components
import Index from './pages/index'
import CourseFilter from './pages/CourseFilter'
import ArticlesPage from './pages/ArticlesPage'
import Dashboard from './pages/Dashboard'
import EditUserInfo from './pages/EditUserInfo'
import UserCourses from './pages/UserCourses'
import MainPage from './pages/MainPage'
import CoursePage from './pages/CoursePage'
import Register from './pages/Register'

const router = [
    { path: '/', element: <Index /> },
    { path: '/course-cat/:category', element: <CourseFilter title="دوره های فرانت اند" count={28} /> },
    { path: '/blog', element: <ArticlesPage count={198} /> },
    { path: '/dashboard', element: <Dashboard />, children: [
        { index: true, element : <MainPage />},
        { path: 'courses', element : <UserCourses />},
        { path: 'edit-info', element : <EditUserInfo />},
    ] },
    { path: '/courses/:course-name', element: <CoursePage /> },
    { path: '/register', element: <Register /> },
    
]

export default router