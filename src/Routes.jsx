import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import CartPage from './pages/CartPage'





const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    )
}


export default AppRoutes