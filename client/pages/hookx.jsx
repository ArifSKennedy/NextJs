
import React, { Component, useState } from 'react'



function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(['Arif','Dodi','Budakhideung','Cahwiguna','Windah']);
  const [open, setopen] = useState(false);
  return (
    <>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment +
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement -
      </button>
      {
        item.length > 0 && (
            item.map((item,index) => (
                <div key={index}>
                    <h3>Mahasiswa ke - {index + 1} {item} </h3>
         
                </div>
            ))
        )
      }
      {
        open && (
            <div>Componen Open</div>
        )
      }
      
      {
      !open && (
            <div>Componen Close</div>
        )
      }
      {
       open 
        ?(
            <div>Componen Open</div>
         )
         : (
            <div>Componen Class</div>
         )
       
            
      }
    </div>
    </>
  );
}

export default Example   