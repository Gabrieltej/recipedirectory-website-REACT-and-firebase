import './Recipelist.css'
import { Link, useFormAction } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { db } from '../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react'



//the function to delete doc using firebase and by using the id as the parameter, not that we will not see the effect of ths if we do not use it in realTime, we will need to refresh the page b4 we can see the effect and hence the need for realtime solution


const handleClick=async (id)=>{
  const getRid=await deleteDoc(doc(db, 'recipes', id))
  return getRid
}




export default function Recipelist({recipes}) {


const {mode} = useTheme()

  return (
    <div className='recipe-list'>
     {recipes.map((recipe)=>{
       return (
         <div key={recipe.id} className={`card ${mode}`}>
           <h3>{recipe.title}</h3>
           <p>{recipe.cookingTime} to make.</p>
           <div>{recipe.method.substring(0, 100)}...</div>
           <Link to={`recipe/${recipe.id}`}>Cook this</Link>
            <button className='delete' onClick={()=>{
              handleClick(recipe.id)
            }}>delete</button>
         </div>
       )    
     })}
    </div>    
  )
}
