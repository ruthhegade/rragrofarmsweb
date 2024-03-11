
import './App.css'
import { Outlet } from 'react-router-dom'
import Headers from './Components/Headers'

function App() {


  return (
    <>
<Headers/>
<main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
  <Outlet/>
</main>
    </>
  )
}

export default App
