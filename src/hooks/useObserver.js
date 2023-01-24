import { useEffect, useState, useRef } from "react";


const useObserver = () => {

    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    const callbackFunction = (entries) => {
        const [ entry ]= entries
        setIsVisible(entry.isIntersecting)
    }

    const [options] = useState({  
        root: null,
        rootMargin: "200px",
        threshold: 0.5
    })

    useEffect(() => {

        const observerRefValue = null

        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)

        return() => {
            if(observerRefValue) observer.unobserve(observerRefValue)

        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useObserver;