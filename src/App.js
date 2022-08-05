import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Description from "./Pages/Description/Description";
import { TheContext } from "./Context/contex";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TheContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description/:name" element={<Description />} />
          </Routes>
        </TheContext>
      </QueryClientProvider>
    </>
  );
}

export default App;
