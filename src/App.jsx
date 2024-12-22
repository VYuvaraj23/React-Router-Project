import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Layout from "./wrappers/Layout";
import ProductLoader from "./loaders/unit";
import Loading from "./components/Loading";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <ProductPage />,
          loader: ProductLoader,
          hydrateFallbackElement: <Loading />,
        },
        { path: "cart", element: <CartPage /> },
        {
          path: "product/:id",
          element: <ProductDetailsPage />,
          loader: ProductLoader,
          hydrateFallbackElement: <Loading />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
