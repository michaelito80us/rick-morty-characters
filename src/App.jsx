import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import HeroBanner from "./HeroBanner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="min-h-screen bg-[#282c34] text-center text-white selection:bg-green-900 ">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HeroBanner />
          <Routes>
            {/* <Route path="/details/:id" element={<Details />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
