import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const BucketList = () => {
    let [show, setShow] = useState(false);
    // let dropdownref = useRef()

    // useEffect(()=>{
    //     document.body.addEventListener("click", (e)=>{
    //         console.log(dropdownref.current);
    //         if (dropdownref.current.contains(e.target)){
    //             setShow(true);
    //         }
    //         else{
    //                 setShow(false);
    //             }
    //     });
    // },[]);


  return (
    <>
    {/* <h1 onClick={()=>setShow(!show)}>BucketList</h1> */}
    <h1 onMouseOver={()=>setShow(true)} style={{background:"green", width:250}}>BucketList</h1>
    {show &&
        <ul onMouseLeave={()=>setShow(false)} style={{background:"red", width:200, minHeight:300}}>
            <li>1111</li>
            <li>22222</li>
            <li>3333</li>
            <li>3333</li>
            <li>4444</li>
            <li>5555</li>
        </ul>
    }
    </>
  )
}

export default BucketList