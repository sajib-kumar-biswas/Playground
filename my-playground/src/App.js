import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootNavbar from './Components/BootNavbar'
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex: 1;
`

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Navbar />
          <BootNavbar />
          <Main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
            </Routes>
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App;
