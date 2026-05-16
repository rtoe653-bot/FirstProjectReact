import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const [isVisible, setIsVisible] = useState(true)
    
    return (
        <header className="relative flex items-center justify-between p-4 bg-gray-100">
            <div className="w-20"></div> {/* Пустой div для баланса */}
            <span className="text-xl font-bold">Интернет магазин</span>
            
               <Link to='/auth'>
                <button 
                onClick={() => setIsVisible(!isVisible)}
                className="bg-black text-white px-4 py-2 rounded "
            >
                Войти</button></Link>
        </header>
    )
}

export default Header