
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CustomProducts from "./pages/CustomProducts";
import EfficiencyProjects from "./pages/EfficiencyProjects";
import PrivateLabel from "./pages/PrivateLabel";
import RawMaterials from "./pages/RawMaterials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/custom-products" element={<CustomProducts />} />
            <Route path="/efficiency-projects" element={<EfficiencyProjects />} />
            <Route path="/private-label" element={<PrivateLabel />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Analytics />
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/+905549652026"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-colors"
            aria-label="WhatsApp ile iletişime geç"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.337-.207-3.433-.615l-.245-.09-4.65 1.217 1.24-4.527-.16-.234C7.23 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-7.13c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.14-.184.278-.713.899-.874 1.085-.16.185-.322.208-.599.07-.277-.139-1.17-.431-2.23-1.374-.824-.735-1.38-1.64-1.542-1.917-.16-.278-.017-.428.122-.567.126-.125.278-.326.417-.489.139-.163.185-.278.278-.463.093-.185.046-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.528-.009c-.17 0-.446.064-.68.298-.232.232-.88.861-.88 2.099 0 1.238.902 2.434 1.028 2.603.126.17 1.775 2.71 4.3 3.692.602.207 1.07.33 1.436.422.603.153 1.153.132 1.588.08.484-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z"/>
            </svg>
          </a>
        </>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
