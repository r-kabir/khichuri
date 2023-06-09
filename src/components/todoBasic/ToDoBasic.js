import React from 'react'
import { useState } from "react";

const ToDoBasic = () => {

    let [mainArray, setMainArray] = useState([]);
    let [todoList, setTodoList] = useState("");
    let [emptyError, setEmptyError] = useState(false);
    let [editOption, setEditOption] = useState(false);
    let [editIndex, setEditIndex] = useState("");

  
    let handleChange = (e)=> {
      setTodoList(e.target.value);
      if (emptyError){
          setEmptyError(false);
        }
    }
  
    let handleClick = ()=> {
      const space = /\S/;
      if (space.test(todoList)){
        mainArray.push(todoList);
        let hudaiArray = [...mainArray];
        setMainArray(hudaiArray);
        setTodoList("");
      
        if (emptyError){
          setEmptyError(false);
        }
      }else{
        setEmptyError(true);
      }
    }
  
    let handleDelete = (index)=> {
      mainArray.splice(index, 1);
      let hudaiArray = [...mainArray];
      setMainArray(hudaiArray);
      if (emptyError){
        setEmptyError(false);
      }
      if ((mainArray = ([]))) {
        setEditOption(false);
        setTodoList("");
      }
    }

    let handleEdit = (item, index)=> {
      setEditOption(true);
      setTodoList(item);
      setEditIndex(index);
      if (emptyError){
        setEmptyError(false);
      }
    }

    let handleUpdate = ()=> {
      mainArray[editIndex] = todoList;
      let hudaiArray = [...mainArray];
      setMainArray(hudaiArray);
      setTodoList("");
      setEditOption(false);
    }

    // let handleCancel = ()=> {
    //   setEditOption(false);
    //   setTodoList("");
    //   if (emptyError){
    //     setEmptyError(false);
    //   }
    // }


  return (
    <>
      <div className="bg-rose-100 h-80 mx-auto max-w-2xl text-center shadow-xl my-10">
          <h2>To Do</h2>
          <input onChange={handleChange} value={todoList} className='w-96 p-1 shadow-sm outline-rose-500' />
          {editOption ?
            <>
              <button className="inline-flex justify-center rounded-md bg-red-600 px-3 py-1 mx-1
                text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={handleUpdate}>Update</button>
              <button className="inline-flex justify-center rounded-md bg-red-600 px-3 py-1 mx-1
                text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={()=>{setEditOption(false); setTodoList("")}}>Cancel</button>
            </>
           :
            <button className="inline-flex justify-center rounded-md bg-red-600 px-3 py-1 mx-1
            text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={handleClick}>Add to Your Wish List</button> 
          }
          {emptyError && <p>Please Write Something...</p>}
          <ul>{mainArray.map((item,index) => (
              <li className='my-2 mx-auto p-1 bg-rose-50 w-96 text-end list-none shadow-md' key={index}>{item}-{index}
              <button className="inline-flex justify-center rounded-md bg-red-600 px-3 py-1 mx-1
                text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={()=>handleDelete(index)}>Delete</button>
              <button className="inline-flex justify-center rounded-md bg-red-600 px-3 py-1 mx-1
                text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={()=>handleEdit(item, index)}>Edit</button>
              </li>
          ))}
          </ul>
      </div>
    </>
  )
}

export default ToDoBasic;