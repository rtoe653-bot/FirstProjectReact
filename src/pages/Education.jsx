import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import MyList from "../components/MyList"
function Education() {

    return (
        <div>
              <h1>Обучающая страница</h1>
              <MyComponent/>
              <SampleBlock/>
              <MyList/>
              title={"Заголовок"}
              description={"Описание"}
              

              
        </div>
     

    )
}

 export default Education