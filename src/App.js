import React from 'react'
import { useState } from 'react'
import { product } from './data'

function App() {

  const [formState, setFromState] = useState({
    name: '',
    email: '',
    phone:''
  })


 const handelSubmit =(e) =>{
    e.preventDefault()

    console.log(formState)
    // data manage by browser
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)
    // console.log(e.target[2].value)
  }

  const handelChange = (event) => {
    setFromState({
       ...formState,
      [event.target.name]: event.target.value
    })
  }
  

  return (


  <>
      <h1> Form </h1>
      <form onSubmit={handelSubmit}>
      <div>
        <label>Whats your name</label>
          <input type='text' name='name' placeholder='shohel rana' value={formState.name}
          onChange={handelChange}
          /> 
      </div>
      <div>
        <label>Whats your Email</label>
      <input type='text' name='email' placeholder='shohel343@gmail.com' value={formState.email}  onChange={handelChange}/>
      </div>
      <div>
        <label>Whats your Phone</label>
      <input type='text' name='phone' placeholder='+880193089' value={formState.phone} onChange={handelChange}/>
      </div>
      <div>
    <button type='submit'>Submit</button>
   </div>
   </form> 
    <h3> Bread Crumbs  </h3>
      {product.breadcrumbs.map((item => (
      <a href={item.link} style={{display:'inline-block',marginRight:'1rem'}}>{item.text} </a>
    )))}
      
    </>
   
  )
}

export default App;
