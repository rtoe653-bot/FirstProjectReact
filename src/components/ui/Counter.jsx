import { useState } from "react"
import { useEffect } from "react"

function Counter() {
   const [count, setCount] = useState(0)

   useEffect(()=>{
    console.log("Значение count = ", count)
   }, [count])
 return(
    <div>
        <div className="border p-3">
        <p>Текущее значение: {count}</p>
        </div>
        <button
            onClick={()=>{setCount(count+1)}}
            >Увеличить</button>
        <button
        onClick={()=>{setCount(count-1)}}
        >Уменьшить</button>
    </div>
 )
}

export default Counter