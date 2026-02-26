import { Header } from "../components/layout/Header";
import { Chat } from "../components/layout/Chat";
import { Footer } from "../components/layout/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-background0 text-white font-geist">
      <div className="w-full max-w-280 mx-auto">
        <Header />
        <div className="pt-28 xl:px-0 px-4">
          {children}
          <Chat />
          <Footer />
        </div>
      </div>
    </main>
  );
};
