import { useParams } from "react-router-dom"
import Header from "../components/Header"

function ProductPage() {
    const { id } = useParams()
    
    return (
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Товар #{id}</h1>
                <p>Страница товара с ID: {id}</p>
            </div>
        </div>
    )
}

export default ProductPage