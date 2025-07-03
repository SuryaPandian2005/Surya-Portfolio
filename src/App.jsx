import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import  RockPaperScissors  from "./pages/RockPaperScissors";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/rps" element={<RockPaperScissors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
