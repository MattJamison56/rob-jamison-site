import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import TaxPreparation from './pages/what-we-do/TaxPreparation';
import TaxAdvisory from './pages/what-we-do/TaxAdvisory';
import Accounting from './pages/what-we-do/Accounting';
import TaxResolution from './pages/what-we-do/TaxResolution';
import Resource1 from './pages/resources/Resource1';
import Resource2 from './pages/resources/Resource2';
import Resource3 from './pages/resources/Resource3';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/what-we-do/tax-preparation" element={<TaxPreparation />} />
            <Route path="/what-we-do/tax-advisory" element={<TaxAdvisory />} />
            <Route path="/what-we-do/accounting" element={<Accounting />} />
            <Route path="/what-we-do/tax-resolution" element={<TaxResolution />} />
            <Route path="/resources/resource-1" element={<Resource1 />} />
            <Route path="/resources/resource-2" element={<Resource2 />} />
            <Route path="/resources/resource-3" element={<Resource3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

