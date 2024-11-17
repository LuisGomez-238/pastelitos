import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const CakeBuilder = lazy(() => import('./pages/CakeBuilder'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Animated page wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />
        <Route path="/menu" element={
          <PageWrapper>
            <Menu />
          </PageWrapper>
        } />
        <Route path="/cake-builder" element={
          <PageWrapper>
            <CakeBuilder />
          </PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatedRoutes />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;