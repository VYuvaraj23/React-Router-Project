import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import "./CartPage.css";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="cartPage-h1">Your Cart</h1>
      <p className="cartDiv-2 pr-5">
        Total: ${discountedTotal.toFixed(2)} (10% discount applied)
      </p></div>
      <div className="cartDiv-1">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} updateCart={updateCart} />
        ))}
      </div>
      
    </div>
  );
}
