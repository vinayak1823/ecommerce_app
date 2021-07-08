import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import { BrowserRouter, Route } from 'react-router-dom'
import Productscreen from './screens/Productscreen'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={Productscreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
