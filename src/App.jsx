import { Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"
import ProductList from "./components/ProductList"
import Education from "./pages/Education"
import Main from "./pages/Main"
import Admin from "./pages/Admin"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/products" element={<ProductList />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default App