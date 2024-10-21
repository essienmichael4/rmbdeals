import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './components/Layout'
import Orders from './pages/Orders/Orders'
import Account from './pages/Account/Account'
import Checkout from './pages/Checkout/Checkout'
import Whatsapp from './components/Whatsapp'
import RequireAuth from './components/RequireAuth'
import OrderItem from './pages/Orders/OrderItem'
import AdminLogin from './pages/Admin/Login/AdminLogin'
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard'
import AdminLayout from './components/AdminLayout'
import OrdersAdmin from './pages/Admin/Orders/OrdersAdmin'
import OrderItemAdmin from './pages/Admin/Orders/OrderItemAdmin'
import AdminAccount from './pages/Admin/Account/AdminAccount'
import Buy from './pages/Buy/Buy'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import PasswordReset from './pages/PasswordReset/PasswordReset'
import NotFound from './pages/NotFound/NotFound'
import Unauthorized from './pages/NotFound/Unauthorized'
import Wizard from './pages/Wizard/Wizard'

function App() {
  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route element={<Whatsapp />}>
          <Route path='/' element={<Home />} />
          <Route path='buy' element={<Buy />} />
          <Route path='checkout/:id' element={<Checkout />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<PasswordReset />} />
          <Route path='register' element={<Register />} />

          {/* User Protected Routes */}
          <Route element={<RequireAuth allowedRole='USER'/>}>
            <Route element={<Layout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='orders' element={<Orders />} />
              <Route path='orders/:id' element={<OrderItem />} />
              <Route path='account' element={<Account />} />
              <Route path='wizard' element={<Wizard />} />
            </Route> 
          </Route> 
        </Route>

        {/* Admin Routes */}
        <Route path='co/administrator' element={<AdminLogin />} />

        {/* Admin Protected Route */}
        <Route element={<RequireAuth allowedRole='ADMIN'/>}>
          <Route element={<AdminLayout />}>
            <Route path='co/administrator/dashboard' element={<AdminDashboard />} />
            <Route path='co/administrator/orders' element={<OrdersAdmin />} />
            <Route path='co/administrator/orders/:id' element={<OrderItemAdmin />} />
            <Route path='co/administrator/account' element={<AdminAccount />} />
          </Route>
        </Route>

        {/* Catch all other routes */}
        <Route path='*' element={<NotFound />} />
        <Route path='unauthorized' element={<Unauthorized />} />
      </Routes>
    </>
  )
}

export default App
