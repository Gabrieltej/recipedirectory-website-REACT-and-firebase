import { Route, Routes } from 'react-router-dom'

//we are importing the functions that we created in each of this subfolders into the App component
import Navbar from './Component/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Error from './pages/error'
import Themeselector from './Component/Themeselector'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const{mode}=useTheme()
  
  return (
    <div className={`App ${mode}`}>
      <Routes>
        <Route element={<Navbar/>}>
          <Route element={<Themeselector />}>
            <Route path='/' element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='recipe/:id' element={<Recipe />} />
            <Route path='create' element={<Create />} />
            <Route path='*' element={<Error />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )

}

export default App
