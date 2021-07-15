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
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
