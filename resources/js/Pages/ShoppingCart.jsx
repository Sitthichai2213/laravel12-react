import { useState } from "react";
import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";

export default function ShoppingCart() {
    const products = [
        {
            id: 1,
            name: "Gaming Keyboard",
            price: 1500,
            category: "Gaming",
            image: "/images/keyboard.jpg"
        },
        {
            id: 2,
            name: "Office Mouse",
            price: 500,
            category: "Office",
            image: "/images/mouse.jpg"
        },
        {
            id: 3,
            name: "Gaming Monitor",
            price: 4500,
            category: "Gaming",
            image: "/images/monitor.jpg"
        },
        {
            id: 4,
            name: "Headset",
            price: 1200,
            category: "Gaming",
            image: "/images/headset.jpg"
        }
    ];

    const [cartItems, setCartItems] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const filteredProducts = products.filter((product) => {
        const matchSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchSearch && matchCategory;
    });

    return (
        <BootstrapLayout>
            <Head title="Shopping Cart" />

            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to right, #dbeafe, #f0f9ff)"
                }}
            >
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold display-4 text-primary">
                            Tech Store
                        </h1>
                        <p className="text-muted">
                            Unique Shopping Cart with React State
                        </p>
                    </div>

                    {/* Search + Filter */}
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <input
                                className="form-control shadow-sm"
                                placeholder="Search product..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select shadow-sm"
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                            >
                                <option>All</option>
                                <option>Gaming</option>
                                <option>Office</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        {/* Product Section */}
                        <div className="col-md-8">
                            <div className="row">
                                {filteredProducts.map((product) => (
                                    <div
                                        className="col-md-6 mb-4"
                                        key={product.id}
                                    >
                                        <div className="card shadow border-0 rounded-4 h-100">
                                            <img
                                                src={product.image}
                                                className="card-img-top"
                                                alt={product.name}
                                                style={{
                                                    height: "220px",
                                                    objectFit: "cover"
                                                }}
                                            />

                                            <div className="card-body">
                                                <span className="badge bg-primary mb-2">
                                                    {product.category}
                                                </span>

                                                <h5>{product.name}</h5>
                                                <p>{product.price} บาท</p>

                                                <button
                                                    className="btn btn-success w-100"
                                                    onClick={() =>
                                                        addToCart(product)
                                                    }
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Section */}
                        <div className="col-md-4">
                            <div className="card shadow-lg border-0 rounded-4 p-4">
                                <h3>
                                    Cart 🛒
                                    <span className="badge bg-danger ms-2">
                                        {cartItems.length}
                                    </span>
                                </h3>

                                <hr />

                                {cartItems.length === 0 ? (
                                    <p>No items yet</p>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="border rounded p-2 mb-2"
                                        >
                                            <strong>{item.name}</strong>
                                            <br />
                                            {item.price} บาท

                                            <button
                                                className="btn btn-danger btn-sm mt-2 w-100"
                                                onClick={() =>
                                                    removeItem(index)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))
                                )}

                                <hr />
                                <h4>Total: {totalPrice} บาท</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}