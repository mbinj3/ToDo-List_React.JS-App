import React, { useState } from 'react'
import './App.css';
import ToDoLists from './ToDOList';

function App() {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])

  const itemEvent = (e) => {
    setInputList(e.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems)=>{
      return(
        [...oldItems, inputList]
      )
    })
    setInputList("")
  }

  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return(
        oldItems.filter((arrElem, index)=>{
          return(
            index !== id
          )
        })
      )
    })    
  }

  return (
    <>
      <div className="main_div">

        <div className="center_div">

          <br/>
          <h1>ToDo List</h1>

          <br/>
          <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList} />

          <button id='addBtn' onClick={listOfItems}>+</button>

          <ol>
            {items.map((itemval, index)=>{
              return(
                <ToDoLists 
                 key={index} id={index} 
                 itemval={itemval} 
                 onSelect ={deleteItems} 
                />
              )
            })}
          </ol>

        </div>

      </div>
    </>
  );
}

export default App;
