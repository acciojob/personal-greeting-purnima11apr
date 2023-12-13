import React, {useState} from "react";


const Display = () => {
    const [name , setName] = useState("");


    function handleChange(event){

        setName(event.target.value);
    }

    return(
     <div>
        <form>
        <label htmlFor="name">Enter your name :</label>
        <br/>
        <input type="text" id="name" onChange={handleChange} value={name}/>
        {name && <p>Hello {name}!</p>}
        </form>

      
       
     </div>
    );
}

export default Display;