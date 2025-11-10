import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard'
import LandingPage from './pages/landing-page'
import ApiKey from './pages/apiKeys';
import HelpBot from './pages/helpbot';
import ChatBot from './pages/chatbot';
import FaqBot from './pages/faqbot';
import OpenHrs from './pages/openhrs';
import BookingsBot from './pages/bookings';
import Settings from './pages/settings';
import Docs from './pages/docs';
import Support from './pages/support';

function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/"></Link> 
        <Link to="/dashboard"></Link> 
        <Link to="/keys"></Link>
        <Link to="/helpbot"></Link>
        <Link to="/chatbot"></Link>
        <Link to="/faq"></Link>
        <Link to="/openhrs"></Link>
        <Link to="/finder"></Link>
        <Link to="/settings"></Link>
        <Link to="/docs"></Link>
        <Link to="/support"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/keys" element={<ApiKey />} />
        <Route path="/helpbot" element={<HelpBot />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/faq" element={<FaqBot />} />
        <Route path="/openhrs" element={<OpenHrs />} />
        <Route path="/finder" element={<BookingsBot />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
