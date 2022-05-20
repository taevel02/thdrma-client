import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<Home />} />

        <Route path={'/auth/login'} element={<Login />} />
        <Route path={'/auth/register'} element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
