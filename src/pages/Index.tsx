import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import SeeAlso from "@/components/SeeAlso";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkGrid />
      <SeeAlso />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
