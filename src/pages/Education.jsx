import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
function Education() {

    return (
        <div>
              <h1>Обучающая страница</h1>
              <MyComponent/>
              <SampleBlock
              title={"Заголовок"}
              description={"Описание"}
              />

              
        </div>
     

    )
}

 export default Education