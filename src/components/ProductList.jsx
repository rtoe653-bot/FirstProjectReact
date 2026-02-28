import ProductCard from "./ProductCard"

function ProductList() {
    return (
        <div className='flex flex-wrap gap-5 mt-10'>
        <ProductCard
        title= "Мышка" 
        description = "Description 1"
        price={99}
        />
        <ProductCard
        title = "Наушники"
        description = "Description 2"
        price={100 }
        />
        <ProductCard
        title= "Телевизор" 
        description = "Description 3"
        price={750}
        />
        <ProductCard
        title= "Телефон" 
        description = "Description 4"
        price={299}
        />
        <ProductCard
        title= "Клавиатура" 
        description = "Description 5"
        price={199}
        />
        <ProductCard
        title= "Ноутбук" 
        description = "Description 6"
        price={499}
        />
        </div>
    )
}

export default ProductList