import { useParams } from 'react-router-dom'
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/config'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'

//we are applying the usefetch hook over here to fetch individual recipe which we assigned to be equal to data, and since we can access the id using the useparam hook then we can add that to our url and fetch what we need

export default function Recipe() {
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIspending] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const { mode } = useTheme()

  //declaring our async function here to be invoked in the use effect hook
//   const getSingleDoc=async ()=>{
//     const docRef = doc(db, 'recipes', id)
//     const docSnap = await getDoc(docRef)
//     console.log(docSnap.data())
//     setRecipe(docSnap.data())
// }



//just like we set realtime listening for the whole collection data, so we can do for the single document too

  useEffect(()=>{
      // getSingleDoc()
  
 const colRef = collection(db, 'recipes')
 const unsub=onSnapshot(colRef, (snapshot)=>{
  //console.log your way out to solution
  (snapshot.docs.map((doc)=>{
    if(doc.data()){
      console.log(doc.data())
      setRecipe(doc.data())
    } else{
      setError(true)
    }
      
  }))
 })

 return()=>{
  unsub()
 }
  },[id])
  // //so we are going to have the useParam hook inside of our function component and we destructure the id.
  const handleClick = () => {
    const data = { title: 'something completely different' }
    const docRef = doc(db, 'recipes', id)
    updateDoc(docRef, data)
  }

  //the empty dependency array mean, only run it when the component is rendered

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>error occured when fetching!!!</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => {
              return <li key={ing}>{ing}</li>
            })}
          </ul>
          <p className='method'>{recipe.method}</p>
          <button className='button' onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  )
}
