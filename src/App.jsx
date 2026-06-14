import Navbar from './components/Navbar'
import BackgroundAnimation from './components/BackgroundAnimation'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
