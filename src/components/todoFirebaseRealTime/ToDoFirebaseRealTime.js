import { useState, useEffect } from 'react'
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";

const ToDoFirebaseRealTime = () => {

  const todoDB = getDatabase();
  
  let [taskList, setTaskList] = useState("");
  let [mainArray, setMainArray] = useState([]);
  let [fakaError, setFakaError] = useState(false);
  let [successMessage, setSuccessMessage] = useState(false);
  let [editOption, setEditOption] = useState(false);

  // let handleChange = (e)=> {
  //   let hudaiList = e.target.value;
  //   taskList = hudaiList;
  //   setTaskList(hudaiList);
  // }
  //>>>>>>>>>>>>>>>>>>>> Create/Write Data >>>>>>>>>>>>>>>>>//
  let handleClick = ()=> {
    const space = /\S/;
    if (space.test(taskList)) {
      set(push(ref(todoDB, 'lists/')), {
        listItem: taskList
      });
      setSuccessMessage(true);
      // mainArray.push(taskList);
      // let hudaiArray = [...mainArray];
      // setMainArray(hudaiArray);
      setTaskList("");
      // if(fakaError) {
      //   setFakaError(false);
      // }
    }else {
      setFakaError(true);
    }
  }
  //>>>>>>>>>>>>>>>>> Read Data >>>>>>>>>>>>>>>>>>//
  useEffect (() => {
    const hudaiRef = ref(todoDB, 'lists/');

    // let hudaiArray = [];

    onValue(hudaiRef, (snapshot)=> {
      let hudaiArray = [];
      snapshot.forEach((item)=>{
        // console.log(item.val());
        // console.log(item.key);
        hudaiArray.push( {...item.val() , id: item.key} )
      })
      setMainArray(hudaiArray)
      // console.log(hudaiArray);
    });

  },[])

  let handleDelete = (id)=> {
    remove(ref(todoDB, 'lists/' + id)).then(()=> {
      console.log('delete hoise')
    })

  }

  let handleEdit = ()=> {
    setEditOption(true);
    console.log('edit hoise');
  }

  let handleUpdate = ()=> {
    console.log('update hoise');
  }

  return (
    <>
      <div className="bg-teal-200 h-max mx-auto max-w-2xl text-center shadow-xl my-10">
          <h2>Todo firebase real time.....</h2>
          <input onChange={(e)=>{setTaskList(e.target.value); setFakaError(false); setSuccessMessage(false)}} value={taskList} className='w-96 p-1 shadow-sm outline-teal-500' />
          {editOption ?
            <>
              <button onClick={handleUpdate} className='border border-solid mx-1 bg-amber-200 border-amber-400 px-2 rounded-sm'>Update</button>
              <button onClick={()=>{setEditOption(false); setTaskList("")}} className='border border-solid mx-1 bg-rose-200 border-rose-400 px-2 rounded-sm'>Cancel</button>
            </>
            :
            <button onClick={handleClick} className='border border-solid mx-1 bg-amber-200 border-amber-400 px-3 rounded-sm'>Add to Your Task</button>
          }
          {fakaError && <h4>No Input....Please Write Something....</h4>}
          {successMessage && <h3>Done......!!!!!</h3>}
          {mainArray.map((item, index) => (
          <li key={index} className='my-2 mx-auto p-1 bg-teal-100 w-96 text-end list-none shadow-md'>{item.listItem} --{item.id}
            <button onClick={handleEdit} className='border border-solid mx-1 bg-teal-500 border-teal-800 text-white px-2 rounded-sm'>Edit</button>
            <button onClick={()=>handleDelete(item.id)} className='border border-solid mx-1 bg-rose-500 border-rose-800 text-white px-2 rounded-sm'>Delete</button>
          </li>
          ))}
      </div>
    </>
  )
}

export default ToDoFirebaseRealTime;