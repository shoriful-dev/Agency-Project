import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import RootLayouts from './components/RootLayouts';
import Services from './pages/Services';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import News from './pages/News';
import Contact from './pages/Contact';
import Erorr from './pages/Erorr';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="team" element={<Team />}></Route>
        <Route path="pricing" element={<Pricing/>}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<Erorr />}></Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
