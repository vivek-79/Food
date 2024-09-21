import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home,Cart,PlaceOrder ,SignUp,Login,Admin,Seller} from './Pages/index.js'
import {Add,List,Order} from './PageAd/index.js'
import {Provider} from 'react-redux'
import store from './Store/Store.js'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}>
        <Route path='add' element={<Add/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='order' element={<Order/>}/>
      </Route>
      <Route path='/seller' element={<Seller/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
