import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Services from './Pages/Services/Services';

function App() {
  return (
    <>
      <Navbar>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<Login></Login>}></Route>

    </Routes>
      </Navbar>
      <Footer/>
    </>
  );
}

export default App;
