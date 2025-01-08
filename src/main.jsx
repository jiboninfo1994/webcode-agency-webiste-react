import { createRoot } from 'react-dom/client';
import './index.css';
import 'sweetalert2/dist/sweetalert2.js';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './contexts/AuthContext.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import ServiceSection from './pages/home/ServiceSection.jsx';
import BlogSection from './pages/home/BlogSection.jsx';
import PricingSection from './pages/home/PricingSection.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/price" element={<PricingSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
