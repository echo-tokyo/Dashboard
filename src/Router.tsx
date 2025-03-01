import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Results from './pages/results/Results'
import Finalize from './pages/finalize/Finalize'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/results/:id' element={<Results />} />
        <Route path='/finalize/:id' element={<Finalize />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
