import { useRef } from "react"

export const useDebounce = (func, delay) => {
    let idRef = useRef(null);

    return (...args) => {
        clearTimeout(idRef.current)

        idRef.current = setTimeout(() => {
            func(...args)
        }, delay)

    }
}