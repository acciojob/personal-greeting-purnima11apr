import React, {useState} from "react";


const Display = () => {
    const [name , setName] = useState("");


    function handleChange(event){

        setName(event.target.value);
    }

    return(
     <div>
        <form>
        <p>Enter your name :</p>
        <input type="text" id="name" onChange={handleChange} value={name}/>
        </form>

       {name && <p>Hello {name}!</p>}
       
     </div>
    );
}

export default Display;