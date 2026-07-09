import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BusinessTypes from "./components/BusinessTypes.jsx";
import FeatureGrid from "./components/FeatureGrid.jsx";
import OfflineCheckout from "./components/OfflineCheckout.jsx";
import TaxCompliance from "./components/TaxCompliance.jsx";
import InventorySection from "./components/InventorySection.jsx";
import CustomerDebt from "./components/CustomerDebt.jsx";
import StaffShift from "./components/StaffShift.jsx";
import CloudPortal from "./components/CloudPortal.jsx";
import HardwareSection from "./components/HardwareSection.jsx";
import ReportsSection from "./components/ReportsSection.jsx";
import PricingCTA from "./components/PricingCTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-sika-text">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <BusinessTypes />
        <FeatureGrid />
        <OfflineCheckout />
        <TaxCompliance />
        <InventorySection />
        <CustomerDebt />
        <StaffShift />
        <CloudPortal />
        <HardwareSection />
        <ReportsSection />
        <PricingCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
