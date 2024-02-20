import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'

function App() {

  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
