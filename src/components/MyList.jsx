import MyComponent from "./MyComponent"
import { useState } from "react"
import ProductList from "./ProductList"
import SampleBlock from "./SampleBlock"
function MyList() {
    const [items, setItems] = useState([
        
            {id: "1",name: "один", price: 213},
            {id: "2",name: "два", price: 223},
            {id: "3",name: "три", price: 192}
        
    ])
  
   
    return (
      <div className=" flex flex-col flex gap-10 w-50">
       {items.map((item)=>(
        <div>
        <div key={item.id}></div>
            <h2>{item["name"]}</h2>
        <p>{item["price"]}$</p>
        <button onClick={()=>console.log(item.id)}>Удалить</button>
        </div>
       ))}
      </div>
   )

}
<ProductList/>
export default MyList

