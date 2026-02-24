import { Routes, Route } from 'react-router-dom'
import { MainLayout } from "./layout/MainLayout";
import { Hero } from "./components/layout/Hero";
import { Products } from "./components/layout/Products";
import { Chat } from "./components/ui/Chat";
import { Footer } from "./components/layout/Footer";
import { SelectedProduct } from "./components/layout/SelectedProduct";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Chat />
            <Products />
            <Footer />
          </>
        } />
        <Route path="/product/:id" element={
          <>
            <SelectedProduct />
            <Chat />
            <Products />
            <Footer />
          </>
        } />
      </Routes>
    </MainLayout>
  );
}

export default App;
