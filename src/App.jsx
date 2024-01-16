import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowProduct } from './components/ShowProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Me cago en todo</div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProduct/>}/>
          {/* <Route path='/create' element={<EditProduct/>}/> */}
          {/* <Route path='/' element={<ShowProduct/>}/> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
