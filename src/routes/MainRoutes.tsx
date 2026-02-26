import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layout/MainLayout";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          }
        />
        <Route
          path="/product"
          element={
            <MainLayout>
              <ProductPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
