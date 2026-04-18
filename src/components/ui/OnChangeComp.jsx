

function OnChangeComp() {

    function handleChange(event) {
        console.log(event.target.value)
    }
    return(
       <div>
        <h2>Событиe onChange</h2>

        <input
         
         onChange={handleChange}
         />
       </div>
    )
}


export default OnChangeComp