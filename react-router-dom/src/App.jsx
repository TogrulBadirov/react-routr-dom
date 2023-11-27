import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import {BrowserRouter} from 'react-router-dom';
import Detail from './components/Detail'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
