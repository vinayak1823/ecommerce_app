import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import { BrowserRouter, Route } from 'react-router-dom'
import Productscreen from './screens/Productscreen'
import Cartscreen from './screens/Cartscreen'
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import Profilescreen from './screens/Profilescreen'
import Shippingscreen from './screens/Shippingscreen'
import Paymentscreen from './screens/Paymentscreen'
import PlaceOrderscreen from './screens/PlaceOrderscreen'
import Orderscreen from './screens/Orderscreen'
import UserListscreen from './screens/UserListscreen'
import UserEditscreen from './screens/UserEditscreen'
import ProductListscreen from './screens/ProductListscreen'
import ProductEditscreen from './screens/ProductEditscreen'
import OrderListscreen from './screens/OrderListscreen'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/login' component={Loginscreen} />
          <Route path='/register' component={Registerscreen} />
          <Route path='/profile' component={Profilescreen} />
          <Route path='/cart/:id?' component={Cartscreen} />
          <Route path='/shipping' component={Shippingscreen} />
          <Route path='/payment' component={Paymentscreen} />
          <Route path='/placeorder' component={PlaceOrderscreen} />
          <Route path='/order/:id' component={Orderscreen} />
          <Route path='/admin/userlist' component={UserListscreen} />
          <Route path='/admin/user/:id/edit' component={UserEditscreen} />
          <Route path='/admin/productlist' component={ProductListscreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditscreen} />
          <Route path='/admin/orderlist' component={OrderListscreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
