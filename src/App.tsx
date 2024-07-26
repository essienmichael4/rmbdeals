import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './components/Layout'
import Orders from './pages/Orders/Orders'
import Account from './pages/Account/Account'
import Unknown from './pages/Buy/Unknown'
import Checkout from './pages/Checkout/Checkout'
import Whatsapp from './components/Whatsapp'
import RequireAuth from './components/RequireAuth'
import OrderItem from './pages/Orders/OrderItem'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Whatsapp />}>
          <Route path='/rmbdeals' element={<Home />} />
          <Route path='rmbdeals/buy' element={<Unknown />} />
          <Route path='rmbdeals/checkout/:id' element={<Checkout />} />
          <Route path='rmbdeals/login' element={<Login />} />
          <Route path='rmbdeals/register' element={<Register />} />
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path='rmbdeals/dashboard' element={<Dashboard />} />
              <Route path='rmbdeals/orders' element={<Orders />} />
              <Route path='rmbdeals/orders/:id' element={<OrderItem />} />
              <Route path='rmbdeals/account' element={<Account />} />
            </Route> 
          </Route> 
         </Route>
      </Routes>
    </>
  )
}

export default App
