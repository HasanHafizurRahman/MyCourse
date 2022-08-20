import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
// import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Register from './pages/Register/Register';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';
import Services from './Services/Services/Services';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkput" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
