import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header";  // ← исправленный путь


function Auth() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        if(!email.includes("@")){
            setError("Введите корректный email")
            return
        }

        if(password.length < 6 ){
            setError("Пароль содержит меньше 6 символов")
            return
        }

        console.log("Форма отправлена")
        // Переход на страницу товаров
        navigate("/products")
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword)
    }

    return (
        <div>
          <Header/>  
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-[50%] gap-2">
            <input
            type="text"
            placeholder="Введите email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
            
            <div style={{ position: "relative" }}>
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                style={{ width: "100%", paddingRight: "30px" }}
                />
                <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                }}
                >
                {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">
                Войти
            </button>
            </form>
        </div>
    )
}

export default Auth