import ProductCard from "./ProductCard"
import SampleBlock from "../SampleBlock"
import { useState } from "react"


function ProductList() {
    const [products, setItems] = useState([
        {description: "Description 3",name: "Телевизор", price: 1999},
        {description: "Description 4",name: "Телефон", price: 789},
        {description: "Description 5",name: "Клавиатура", price: 199},
        {description: "Description 6",name: "Ноутбук", price: 4000}
                ])
    
    
    
  
    return(
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
        
    )
}

export default ProductList
