import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import NavBar from './components/shared/NavBar'

function App() {

  return (
    <div className="App">
      <div className='content-container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
