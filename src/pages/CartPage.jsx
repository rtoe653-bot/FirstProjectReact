import { useParams } from "react-router-dom"

function CartPage() {
    const params = useParams()
   return (
 <div>
    Карточка товара
    <p> ID товара: {params.id}</p>
   
 </div>
 
   )

}
  
 





export default CartPage