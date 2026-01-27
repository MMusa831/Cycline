import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element ={<Home />} />
        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
