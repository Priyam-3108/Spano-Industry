import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsOverview } from '@/components/sections/ProductsOverview';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { SupermarketRacks } from '@/components/sections/SupermarketRacks';
import { DepartmentalRacks } from '@/components/sections/DepartmentalRacks';
import { DisplayRacks } from '@/components/sections/DisplayRacks';
import { CustomSolutions } from '@/components/sections/CustomSolutions';
import { HeavyDutyRacks } from '@/components/sections/HeavyDutyRacks';
import { OurClients } from '@/components/sections/OurClients';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsOverview />
        <IndustriesSection />
        <SupermarketRacks />
        <DepartmentalRacks />
        <DisplayRacks />
        <CustomSolutions />
        <HeavyDutyRacks />
        <OurClients />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
