// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Navigation from "@/components/navigation";
// import Footer from "@/components/footer";
// import Home from "@/pages/home";
// import About from "@/pages/about";
// import Programs from "@/pages/programs";
// import Gallery from "@/pages/gallery";
// import Admissions from "@/pages/admissions";
// import Contact from "@/pages/contact";
// import NotFound from "@/pages/not-found";

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/programs" component={Programs} />
//       <Route path="/gallery" component={Gallery} />
//       <Route path="/admissions" component={Admissions} />
//       <Route path="/contact" component={Contact} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <div className="min-h-screen flex flex-col">
//           <Navigation />
//           <main className="flex-1">
//             <Router />
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
