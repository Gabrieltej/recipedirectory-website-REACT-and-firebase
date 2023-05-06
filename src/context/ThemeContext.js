import { createContext, useReducer } from 'react'

export const ThemeContext=createContext()  //the themecontext is an object that we contain the properties that we intennd to pass down or pass on to another component

const themeReducer=(state, action)=>{   
    switch(action.type){ 
      case 'CHANGE_COLOR':
        return{...state, color:action.payload}
      case 'CHANGE_MODE':
        return{...state, mode: action.payload}
    default:
      return state
}
}
export function ThemeProvider({children}){

  const[state, dispatch]=useReducer(themeReducer, {
    color:"#58249c",
    mode: "dark"
  })

  const changeColor=(color)=>{
      dispatch({type:'CHANGE_COLOR', payload:color})
  }

  //while the action types allow you to tell your reducer what action it should take, the payload is the data that the reducer will use to update teh state
const changeMode=(mode)=>{
    dispatch({type:'CHANGE_MODE', payload:mode})
  }
 return( 
   <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
    {children}
  </ThemeContext.Provider>
  ) 
}
 



