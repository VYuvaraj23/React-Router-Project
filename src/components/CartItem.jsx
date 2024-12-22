import './CartItem.css';
export default function CartItem({ item, updateCart }) {
  const handleQuantityChange = (delta) => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")).map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: Math.max(cartItem.quantity + delta, 1) };
      }
      return cartItem;
    });
    updateCart(updatedCart);
  };

  const handleRemove = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")).filter(
      (cartItem) => cartItem.id !== item.id
    );
    updateCart(updatedCart);
  };

  return (
    <div className="cartItem">
      <div>
        <h3> {item.title}</h3>
        <p className='text-green-800 font-bold'>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => handleQuantityChange(-1)} className="bg-gray-300 px-2">-</button>
        <button onClick={() => handleQuantityChange(1)} className="bg-gray-300 px-2">+</button>
        <button onClick={handleRemove} className="bg-red-500 text-white px-4">Remove</button>
      </div>
    </div>
  );
}
