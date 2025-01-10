import React from 'react'
import { Outlet } from 'react-router'
import NavPlusNav from './NavPlusNav'
import Footer from '../layouts/Footer'

const RootLayouts = () => {
  return (
    <>
    <NavPlusNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayouts
