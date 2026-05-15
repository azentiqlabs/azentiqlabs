import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import BusinessStrategy from './components/BusinessStrategy';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="services" element={<Services />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="before-after" element={<BeforeAfter />} />
          <Route path="strategy" element={<BusinessStrategy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
