import React from 'react'
import { Outlet } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import "./index.css"

const Layout = () => {
  return (
    <>
    <NavLink  activeClassName="active" to='/'>
        Home
        </NavLink>
    <NavLink  activeClassName="active" to='blogs'>blogs</NavLink>
    <NavLink  activeClassName="active" to='contact'>contact</NavLink>
    <NavLink  activeClassName="active" to='login'>Login</NavLink>
    <Outlet/>
    </>
  )
}
export default Layout
