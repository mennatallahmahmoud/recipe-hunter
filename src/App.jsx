import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'
import Categories from './pages/Categories'
import SuggestForm from './pages/SuggestForm'
import RecipeDetails from './pages/RecipeDetails'
import CategoryDetails from './pages/CategoryDetails'

function App() {

  return (
    <div className='relative'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='recipes' element={<Recipes/>}/>
        <Route path='recipes/:id' element={<RecipeDetails />} />
        <Route path='categories' element={<Categories />}/>
        <Route path='categories/:id' element={<CategoryDetails />} />
        <Route path='suggest-recipe' element={<SuggestForm />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
