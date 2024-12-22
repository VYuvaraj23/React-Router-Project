import { useLoaderData } from "react-router";
import "./ProductPage.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../components/ProductContext";




export default function ProductPage() {

  const products = useLoaderData();
  return (
    <ProductContext.Provider value={products} >
      <main>

        <ProductCard />
      </main>
    </ProductContext.Provider>
  )
}
