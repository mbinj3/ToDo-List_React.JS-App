import React from "react";

const ToDoLists = ({itemval,onSelect,id}) =>{
    return(
        <>
            <div className="todo_style">
                <button id="delBtn" onClick={()=>{
                    onSelect(id)
                }}>X</button>
                <li>{itemval}</li>
            </div>
        </>
    )
}

export default ToDoLists