import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './components/Layout'
import Orders from './pages/Orders/Orders'
import Account from './pages/Account/Account'
import Order from './pages/Orders/Order'
import Unknown from './pages/Buy/Unknown'
import Checkout from './pages/Checkout/Checkout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Unknown />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='orders/:id' element={<Order />} />
          <Route path='account' element={<Account />} />
        </Route> 
         {/* <Route element={< />}> */}
        //     <Route path=''>
        //       {/* <Route path="dashboard" element={<Dashboard/>} /> */}
        //     </Route>
         {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
