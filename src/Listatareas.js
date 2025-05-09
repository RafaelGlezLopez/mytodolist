import React from "react";
import CheckBox from './CheckBox.js';

const TaskList = props => {
    // (C)
    const { lista, setLista } = props;
  
  
    // (A-2)
    const chk = lista.map(item => (
      <CheckBox key={item.id} data={item} />
    ));
    return (
      <div className="todo-list">
        {/*(A-1)*/}
        {lista.length ? chk : "No tareas"}
        {/*(B)*/}
        {lista.length ? (
          <p>
            
            <button className="button blue" >
              Borrar todo
            </button>
          </p>
        ) : null}
      </div>
    );
  };
  
  export default TaskList;