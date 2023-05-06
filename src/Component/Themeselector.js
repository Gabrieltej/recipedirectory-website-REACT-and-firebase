import './Themeselector.css'

import { useTheme } from '../hooks/useTheme'
import { Outlet } from 'react-router-dom'

const themeColor=['#58249c', "#249c6b", "#b70233"]

export default function Themeselector() {

 const{changeColor, changeMode, mode}=useTheme()
 const toggleMode=()=>{
    changeMode(mode ==='dark' ? 'light' : 'dark')
 }
//  console.log(mode)
          // <p style={{fontWeight:'bold'}}>change theme</p>


  return (
    <>
      <div className='theme-selector'>
        <div className='mode-toggle'>
          <img
            style={{
              filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%)',
            }}
            onClick={toggleMode}
            src='https://img.icons8.com/ios/50/null/brightness-settings.png'
          />
        </div>
        <div className='theme-buttons'>
          {themeColor.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  )

}
