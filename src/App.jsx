import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer.jsx";
import { Home } from "./page/home.jsx";
import { Formulir } from "./page/formulir.jsx";

export function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulir" element={<Formulir />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
