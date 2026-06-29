import { useState } from "react";
import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";

export default function ShoppingCart() {
    const products = [
        { id: 1, name: "Keyboard", price: 1500 },
        { id: 2, name: "Mouse", price: 500 },
        { id: 3, name: "Monitor", price: 4500 },
        { id: 4, name: "Headset", price: 1200 }
    ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <BootstrapLayout>
            <Head title="Shopping Cart" />

            <div className="container py-5">
                <h1 className="text-center mb-5 fw-bold text-primary">
                    Shopping Cart
                </h1>

                <div className="row g-4">
                    {/* Product Section */}
                    <div className="col-md-7">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="mb-4">Products</h3>

                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="d-flex justify-content-between align-items-center border rounded-3 p-3 mb-3"
                                    >
                                        <div>
                                            <h5 className="mb-1">{product.name}</h5>
                                            <p className="mb-0 text-muted">
                                                ราคา {product.price} บาท
                                            </p>
                                        </div>

                                        <button
                                            className="btn btn-success px-4"
                                            onClick={() => addToCart(product)}
                                        >
                                            Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cart Section */}
                    <div className="col-md-5">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="mb-4">Cart Items</h3>

                                {cartItems.length === 0 ? (
                                    <p className="text-muted text-center">
                                        No items in cart
                                    </p>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="d-flex justify-content-between align-items-center border rounded-3 p-3 mb-2"
                                        >
                                            <div>
                                                <strong>{item.name}</strong>
                                                <br />
                                                <small className="text-muted">
                                                    {item.price} บาท
                                                </small>
                                            </div>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeItem(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))
                                )}

                                <hr />

                                <h3 className="text-end">
                                    Total:
                                    <span className="text-primary fw-bold ms-2">
                                        {totalPrice}
                                    </span>
                                    บาท
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}