import { createContext, useState } from "react";

const ContextData = createContext()

function AppContext({ children }) {
    const [sidebar, setSidebar] = useState(false)
    const [filterDiv, setFilterDiv] = useState(false)
    const [dashboardSidebar, setDashboardSidebar] = useState(false)
    const [isDark, setIsDark] = useState(() => {
        let darkMode = localStorage.getItem('dark-mode')
        
        if (darkMode === 'true') {
            return true
        } else if (darkMode === 'false') {
            return false
        } else {
            return true
        }
    })
    return (
        <ContextData.Provider value={[
            { sidebar, setSidebar },
            { filterDiv, setFilterDiv },
            { dashboardSidebar, setDashboardSidebar },
            { isDark, setIsDark },
        ]}>
            {children}
        </ContextData.Provider>
    )
}

export { ContextData, AppContext }