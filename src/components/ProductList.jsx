import ProductCard from "./ProductCard"
import SampleBlock from "./SampleBlock"

function ProductList() {
    const [product, setItems] = useState([
        {description: "Description 3",title: "Телевизор", price: 750},
        {description: "Description 4",name: "Телефон", price: 299},
        {id: "Description 5",name: "Клавиатура", price: 199},
        {description: "Description 6",title: "Ноутбук", price: 499}
        
              
                ])
    

    
  
    return(
        <div>
        <ProductCard
        title= "Ноутбук" 
        description = "Description 6"
        price={499}
        />
        </div>
        
    )
}

export default ProductList
