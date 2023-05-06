import './Searchbar.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {

 const [term, setTerm]= useState('')

 const navi = useNavigate() //make sure you declare this outside of the handleSubmit function, same for other usecases to but opposite is the case for the old useHistory

 const handleSubmit=(e)=>{
     e.preventDefault() 
     navi(`/search?q=${term}`)
 }

     //we use the usenavi to say okay go to this page after this has been done without needing to use a button to say go this page, this is common when we submit a form
    
  return (
    <div className='searchbar'>
     <form onSubmit={handleSubmit}>
       <label htmlFor="search">Search:</label>
      <input className='input' type="text" id='search' onChange={(e)=>{
        setTerm(e.target.value)
      }}/>
     </form>

      </div>
  )
}

