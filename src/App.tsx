import './index.css';
import { Hero } from './components/Hero';
import { StatsBand } from './components/StatsBand';
import { SymptomsChecklist } from './components/SymptomsChecklist';
import { Narrative } from './components/Narrative';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { ComparisonTable } from './components/ComparisonTable';
import { ProductFeatures } from './components/ProductFeatures';
import { IdealCustomer } from './components/IdealCustomer';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BotanicalDivider } from './components/BotanicalDivider';

function App() {
  return (
    <>
      <main className="w-full max-w-main mx-auto overflow-hidden">
        <Hero />
        <StatsBand />
        <SymptomsChecklist />
        <BotanicalDivider />
        <Narrative />
        <BotanicalDivider />
        <SocialProof />
        <BotanicalDivider />
        <PainPoints />
        <BotanicalDivider light />
        <Solution />
        <BotanicalDivider />
        <ComparisonTable />
        <BotanicalDivider />
        <ProductFeatures />
        <BotanicalDivider />
        <IdealCustomer />
        <Pricing />
        <BotanicalDivider light />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
