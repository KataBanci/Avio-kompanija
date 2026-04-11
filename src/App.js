import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'
import './styles/bootstrap.min.css';




const App = () =>{
return(
  <>
  <footer>
  <Header  />
  <main className="py-3">
    
  <Container> 
 <HomeScreen/>
 </Container>
 </main>
</footer>
</>
)
}

export default App
