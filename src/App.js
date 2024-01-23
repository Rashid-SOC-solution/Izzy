import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import ProductsSection from "./sections/Products";
import NewsSection from "./sections/News";
import DirectorsSection from "./sections/Directors";
import FAQSection from "./sections/FAQ";
import Footer from "./components/Footer";
import FeaturesCardSection from "./sections/FeaturesCards";
import FeaturesSection from "./sections/Features";

function App() {
  return (
    <div className="dark:bg-[#111920]">
      <header>
        <Navbar />
      </header>

      <HeroSection />
      <FeaturesCardSection />
      <FeaturesSection />
      <AboutSection />
      <ProductsSection />
      <NewsSection />
      <DirectorsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
