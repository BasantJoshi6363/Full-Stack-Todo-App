import React from 'react'
import "./App.css"
import ShowTask from './component/ShowTask'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UpdateTask from './component/UpdateTask'
import DeleteTask from './component/DeleteTask'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ShowTask/>}></Route>
          <Route path='/update/:id' element={<UpdateTask/>}></Route>
          <Route path='/delete/:id' element={<DeleteTask/>}></Route>
        </Routes>
        {/* <ShowTask /> */}
      </BrowserRouter>
    </div>
  )
}

export default App