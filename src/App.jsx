import React from "react";
import {
  Navbar,
  HeroBanner,
  Services,
  Testimonials,
  PromotionBanner,
  Footer,
} from "./components/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <Services />
      <Testimonials />
      <PromotionBanner />
      <Footer />
      <Toaster />
    </main>
  );
};

export default App;
