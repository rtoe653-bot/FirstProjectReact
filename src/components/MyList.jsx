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
        <div>
     {items.map((item)=>(
        <SampleBlock
        title={item.name}
        description={item.price}
        />
      ))}
      </div>
   )

}
<ProductList/>
export default MyList

