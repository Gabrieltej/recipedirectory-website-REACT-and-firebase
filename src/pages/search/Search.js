//import the style
import './Search.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

import Recipelist from '../../Component/Recipelist'
export default function Search() {
const queryString=useLocation().search
const queryParam= new URLSearchParams(queryString)
const query=queryParam.get('q')


//the url below is from the bd.json() that we cretaed and we addeded or removed from
 
  const url = 'http://localhost:4000/recipes?q=' + query

  const{error, isPending, data} = useFetch(url)


  return (
    <div>
      <h2 className='page-title'>
      Recipes including :"{query}"
      </h2>
      {error && <p className='error'>"{error}"</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <Recipelist recipes={data}/>}  
    </div>
  )
}
