import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppPreview from "./components/AppPreview";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
