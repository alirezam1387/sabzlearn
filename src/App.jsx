import { useEffect } from 'react';

// router
import { useRoutes } from 'react-router-dom'
import router from './routes'

// components
import ResponsiveHeader from "./Components/ResponsiveHeader/ResponsiveHeader";

// aos
import 'aos/dist/aos.css';
import AOS from 'aos';

// custom hooks
import useDark from "./Hooks/useDark";

// css
import './custom.css'
import './pages.css'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  let routes = useRoutes(router)
  useDark()

  return (
    <>
        <ResponsiveHeader />
        {routes}
    </>
  )
}

export default App
