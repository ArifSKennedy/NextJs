import React, { useState, useEffect } from 'react';

// Contoh Pengunaan UseEffect React
function Example() {
  const [acconut, setAcconut] = useState({
    email:'',
    password:'',
  });
  
  

  return (
    <div>
      <form action='regist.jsx'>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Masukan email" onChange={(e)=>{setAcconut({email: e.target.value})}} value={acconut.email} name='email'></input>
      </div> 
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Masukan password" onChange={(e)=>{setAcconut({password: e.target.value})}} value={acconut.password} name='password'></input>
      </div> 
        <input type='submit'></input>
      </form>  
      {acconut.email}
      {acconut.password}
      
    </div>
  );
}
  

  export default Example