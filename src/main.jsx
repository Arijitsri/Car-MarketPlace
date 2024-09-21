import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact' 
import Profile from './assets/Profile/Profile'
import AddListing from './Add-Listing'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/add-listing',
    element:<AddListing/>
  }
])


createRoot(document.getElementById('root')).render(
   <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
