import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import HeroBanner from "./HeroBanner";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="min-h-screen bg-[#282c34] text-center text-white selection:bg-green-900 pb-10 w-100vw">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HeroBanner keyword={keyword} setKeyword={setKeyword} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home keyword={keyword} />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
