import { useLoaderData, useParams } from "react-router";
import './ProductDetailsPage.css'

export default function ProductDetailsPage() {
  const products = useLoaderData();

  const id = useParams();

  // console.log(id);
  const product = products.filter((product) => product.id == id.id);
  const [{rating}] = product

  // console.log(rating.rate);

  return (
    <>
      {product.map((item) => (
        <div key={item.id} className="viewProduct">
          <img src={item.image} />
          <p><span>Product Name : </span> {item.title}</p>
          <p><span>Price : </span>${item.price}</p>
          <p><span>Rating : </span>{rating.rate}/5 </p>
          <p><span>Description : </span>{item.description}</p>
        </div>
      ))}
    </>
  );
}
