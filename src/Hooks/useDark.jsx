import { useEffect } from "react"

// context
import { ContextData } from "../contexts/context";
import { useContext } from "react";

export default function useDark() {
    const context = useContext(ContextData)
    
    useEffect(() => {
        if (context[3].isDark) {
            document.documentElement.style.setProperty("--main", "#16A34A");
            document.documentElement.style.setProperty("--second", "#0284C7");
            document.documentElement.style.setProperty("--white", "#fff");
            document.documentElement.style.setProperty("--main-back-color", "#111827");
            document.documentElement.style.setProperty("--back-color", "#242A38");
            document.documentElement.style.setProperty("--gray", "#2F3542");
        } else {
            document.documentElement.style.setProperty("--white", "#111827");
            document.documentElement.style.setProperty("--main-back-color", "#F3F4F6");
            document.documentElement.style.setProperty("--back-color", "#FFFFFF");
            document.documentElement.style.setProperty("--gray", "#F3F4F6");
        }
        localStorage.setItem('dark-mode', context[3].isDark)
    }, [context[3].isDark])

}



let a = {
    dark:{"--main" : "#16A34A"},
    light:{"--main" : "#0284C7"}
}