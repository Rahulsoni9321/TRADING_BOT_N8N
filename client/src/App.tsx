import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateWorkflow from './components/CreateWorkflow'

function App() {

  return (
    <>
      <Routes>
        <Route path='/create-workflow' element={<CreateWorkflow></CreateWorkflow>}></Route>
      </Routes>
    </>
  )
}

export default App
