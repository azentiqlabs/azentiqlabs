import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { initGoogleAnalytics, trackPageView, trackEvent } from "./utils/analytics";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES } from "./constants/analytics";
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import BusinessStrategy from './components/BusinessStrategy';
import Contact from './components/Contact';
// import NotFound from "./pages/NotFound";

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    trackPageView(path);
    trackEvent({
      action: ANALYTICS_EVENTS.PAGE_VIEW,
      category: ANALYTICS_CATEGORIES.NAVIGATION,
      label: path,
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  return (
    <Router>
      <RouteTracker />
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
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
