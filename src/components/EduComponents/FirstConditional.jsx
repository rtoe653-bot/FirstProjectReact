

function FirstConditional({isVisible, setIsVisible}) {

  
       
    return(
        <div>
        {isVisible == true 
        ?<button onClick={()=>setIsVisible(!isVisible)}>Выйти</button>
        :<button onClick={()=>setIsVisible(!isVisible)}>Войти</button>

        ?<p компонент отображается></p>
        :<p компонент отображается></p>
   }
</div>
)
}

        <p>Элемент отображается</p>
    


export default FirstConditional