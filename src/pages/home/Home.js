//importing styles
import './Home.css'
//import our useFetch hook
//import useFetch from '../../hooks/useFetch'  //since we are now connecting to firebase, we do not need u again
import Recipelist from '../../Component/Recipelist'
import { db } from '../../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
import {useEffect, useState } from 'react'


export default function Home() { 
  const [data, setData] = useState(null)
  const [isPending, setIspending] = useState(false)
  const [error, setError] = useState(false)
 //we are making a fetch request to firebase to get the data we stored in our collection

 
useEffect(()=>{
 const colRef = collection(db, 'recipes')
setIspending(true)
  const unsub=onSnapshot(colRef, (snapshot)=>{
    console.log(snapshot)
  let result=[]
  snapshot.docs.map(doc=>{
    result.push({...doc.data(), id: doc.id})
      // console.log(doc.data())
  })

 setData(result)
 setIspending(false)
//whenever you are adding documents directly from firestore, make sure that all the field that is provided is filled, else error occurs, also we can make use of .map or forEach method
})


return()=>{
  unsub()
}
}, [])


  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <h1 className='loading' style={{color:'white'}}>Loading.....</h1>}
      {data && <Recipelist recipes={data} />}
    </div>
  )

}
