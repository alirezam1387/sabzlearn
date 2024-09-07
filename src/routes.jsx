// components
import Index from './pages/index'
import CoursePage from './pages/coursePage'
import ArticlesPage from './pages/ArticlesPage'
import Dashboard from './pages/Dashboard'
import EditUserInfo from './pages/EditUserInfo'
import UserCourses from './pages/UserCourses'
import MainPage from './pages/MainPage'

const router = [
    { path: '/', element: <Index /> },
    { path: '/course-cat/:category', element: <CoursePage title="دوره های فرانت اند" count={28} /> },
    { path: '/blog', element: <ArticlesPage count={198} /> },
    { path: '/dashboard', element: <Dashboard />, children: [
        { path: '', element : <MainPage />},
        { path: 'courses', element : <UserCourses />},
        { path: 'edit-info', element : <EditUserInfo />},
    ] },
]

export default router