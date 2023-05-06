import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
//component


//styles
import './Navbar.css'


//components
import Searchbar from './Searchbar'


export default function Navbar() {

const{color, changeColor}=useTheme() //we are destructuring the color property out of the ThemeContext object that we have created 

  return (
    <>
      <div className='navbar' style={{ background: color }}>
        <nav>
          <Link to='/' className='brand'>
            <h3 className='cook'>myRecipe</h3>
          </Link>
          
          <Searchbar />

          <Link to='/create' className='createh'>
            Create
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
