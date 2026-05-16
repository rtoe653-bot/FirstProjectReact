import Header from "../components/Header";  // ← исправленный путь
import { useState } from "react"
import SampleBlock from "./SampleBlock"
import { useEffect } from "react"
import SearchBlock from "./ui/SearchBlock"
import MyComponent from "./MyComponent";
import ProductList from "./ProductList";  // ← исправьте путь (убрали blocks/)


function MyList() {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
      console.log("Загрузилась страница MyList")
      setTimeout(()=>{
         const data = [
            {id: "1",name: "один", price: 213},
            {id: "2",name: "два", price: 223},
            {id: "3",name: "три", price: 192}
    ]
    setItems(data)
    setFilteredItems(data)
      }, 3000)

    }, [])
  
   if(items.length == 0 ) {
      return <h1>Загрузка...</h1>
   }
    return (
        <div>
         use effect
        <SearchBlock items={items} setSearchFilter={setFilteredItems}/>
     {filteredItems.map((item)=>(
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

