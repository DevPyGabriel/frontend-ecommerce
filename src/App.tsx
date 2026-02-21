import { MainLayout } from "./layout/MainLayout";
import { Hero } from "./components/layout/Hero";
import { Products } from "./components/layout/Products";
import { Chat } from "./components/ui/Chat";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Chat />
      <Products />
      <Footer />
    </MainLayout>
  );
}

export default App;
