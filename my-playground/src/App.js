import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import styled from 'styled-components';
import ReactHook from './Components/ReactHook';

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
          <Main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
            </Routes>
          </Main>
          <ReactHook />
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App;
