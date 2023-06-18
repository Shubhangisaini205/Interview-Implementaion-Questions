import { useRef } from "react"
export const useThrottle = (func, delay) => {
    let  wait  = useRef(false)

    return () => {
        if (wait.current) return;
        func()
        wait.current = true;
        setTimeout(() => {
            wait.current = false
        }, delay)
    }
}