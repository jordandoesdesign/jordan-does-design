import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogoDesigns from "./pages/LogoDesigns";
import CanvaTemplates from "./pages/CanvaTemplates";
import SurrBrand from "./pages/SurrBrand";
import PinterestGraphics from "./pages/PinterestGraphics";
import RoseCityRollers from "./pages/RoseCityRollers";
import IconsIllustrations from "./pages/IconsIllustrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/logo-designs" element={<LogoDesigns />} />
          <Route path="/work/canva-templates" element={<CanvaTemplates />} />
          <Route path="/work/surr-brand" element={<SurrBrand />} />
          <Route path="/work/pinterest-graphics" element={<PinterestGraphics />} />
          <Route path="/work/rose-city-rollers" element={<RoseCityRollers />} />
          <Route path="/work/icons-illustrations" element={<IconsIllustrations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
