//自定义hook: 函数名以use开头
import { useEffect,useState } from "react";
export default function usePosition(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(()=>{

        window.addEventListener('mousemove', handle)
        return ()=>{
            window.removeEventListener('mousemove', handle)
        }
    },[])

    function handle(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    return { x, y }
}