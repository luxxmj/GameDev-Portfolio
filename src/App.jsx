import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import SBMania from "./Pages/Games/SBMania.jsx";
import Plugins from "./Pages/Projects/Plugins.jsx";
import Creations from "./Pages/Projects/Creations.jsx";
import Commissions from "./Pages/Projects/Commissions.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

const App = () => {
  return (
    <div className="bg-slate-800">

      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/SBMania" element={<SBMania />} />
          <Route path="/Plugins" element={<Plugins />} />
          <Route path='/Creations' element={<Creations />} />
          <Route path='/Commissions' element={<Commissions />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
};

export default App;