import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import MyList from "../components/MyList"
import Counter from "../components/ui/Counter"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { useState } from "react"
import OnChangeComp from "../components/ui/OnChangeComp"
import { useEffect } from "react"
function Education() {
    useEffect(()=>{
        console.log("Страница Education загрузилась")
    }, [])
const [number, setNumber] = useState(0)
const [isVisible, setIsVisible] = useState(true)
    return (
        <div>
              <h1>Обучающая страница</h1>
              <MyComponent/>
              <SampleBlock/>
              <MyList/>
              <Counter/>
              <OnChangeComp/>
              <FirstConditional isVisible={isVisible} setIsVisible={setIsVisible}/>
              <button onClick={()=>setIsVisible(!isVisible)}>Изменить отображение</button>
    
              
        </div>
     

    )
}

 export default Education