import React from 'react';
import { useState } from 'react';
const Lista = props => {
  const { manejarSumarItem } = props; //(C-1)
const [description, setdescription] = useState("");
function manejarEnvio(event) {
    event.preventDefault();
    


    manejarSumarItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    



    setdescription("");
  }
    return (<>


<form onSubmit={manejarEnvio}>

<input
              type="text"
              className="text"
              value={description}
              onChange={e => setdescription(e.target.value)}
            />
      
        
  <button id="guardarButton">Guardar</button>
  </form>

</>
    );

};
export default Lista;