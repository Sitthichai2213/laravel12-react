import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    const product = {
      name: `สินค้า ${cartItems.length + 1}`,
      price: 100
    };

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);

    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);

    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <button onClick={addToCart}>เพิ่มสินค้า</button>

      <h3>จำนวนสินค้า: {cartItems.length}</h3>
      <h3>ราคารวม: {totalPrice} บาท</h3>

      {cartItems.map((item, index) => (
        <div key={index}>
          {item.name} - {item.price} บาท
          <button onClick={() => removeItem(index)}>ลบ</button>
        </div>
      ))}
    </div>
  );
}

export default App;