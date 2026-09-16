import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import BusesPage from './pages/BusesPage'
import DestinationsPage from './pages/DestinationsPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <BrowserRouter>

      <Toaster position="top-right" />

      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/buses" element={<BusesPage />} />

          <Route
            path="/destinations"
            element={<DestinationsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>
      </MainLayout>

    </BrowserRouter>
  )
}

export default App