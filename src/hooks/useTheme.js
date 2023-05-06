
//useTheme is a custom hook that we are creating for our context handling
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

//theme context is an object that we can destructure form the get go, say
// const{color}=useContext(ThemeContext) and we will be able to access our color in other places

export const useTheme=()=>{

 const context=useContext(ThemeContext)

 //if we are wrapping some parts of our codes with the themeprovider and then we are using that in another area of the code, then we throw that error
 if(context===undefined){
   throw new Error("useTheme() must be used inside of a themeProvider")
 }
 return context
}

//do not forget that this is the custom hook that we made for our context