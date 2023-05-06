import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Create.css'
import { db } from '../../firebase/config'
import { collection, addDoc} from 'firebase/firestore'

export default function Create() {
  //lists of states that we need

const [title, setTitle] = useState('')  //omo
const [method, setMethod] = useState('') //omo
const [cookingTime, setcookingTime] = useState('') //omo
const [newIngredient, setnewIngredient] = useState('') //
const [ingredients, setIngredients] = useState([]) //for current ingredient

const ingredientInput = useRef(null)


const navi = useNavigate()


  //what submit buttons should do
const handleSubmit = (e) => {
    e.preventDefault()
    const newDoc={title, ingredients, method, cookingTime :cookingTime + ' minutes'}  

  //this is the way to addDoc to our firebase
    const addtoDoc = async () => {
      const food = collection(db, 'recipes')
      const next = await addDoc(food, newDoc)
    }
      addtoDoc()
      navi('/')
}

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    //below, we are saying that if the ing that we are passing into the array is not equal to what is included in the prevIngrident. then run the next function as follows
    
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing])
    }
    setnewIngredient('')
    ingredientInput.current.focus()
  }
   
  
//so instead of making use of the useHistory hook of the react 5, we make use of the useNavigate() hook which is the newly updated stuff for react 6

//usenavigate does not take in any other function

  // useEffect(()=>{
  //     if(data){
  //       navi("/")
  //     }
  // }, [data])

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      {/* a form that we will have all or inputs */}

      <form onSubmit={handleSubmit}>
        {/* use a label to surround each input or textarea */}
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            required
          />
        </label>



        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              value={newIngredient}
              ref={ingredientInput}
              onChange={(e) => {        
                setnewIngredient(e.target.value)
              }}
            />
            <button className='btn' onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>

        <p>
          current ingredient:
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>




        <label>
          <span> Recipe Method:</span>
          <textarea
            //we can do textarea same way we did input
            type='text'
            value={method}
            onChange={(e) => {
              setMethod(e.target.value)
            }}
            required
          />
        </label>



        <label>
          <span>Cooking time(minutes)</span>
          <input
            type='number'
            value={cookingTime}
            onChange={(e) => {
              setcookingTime(e.target.value)
            }}
          />
        </label>


        <button className='btn'>submit</button>
      </form>
    </div>
  )
}


