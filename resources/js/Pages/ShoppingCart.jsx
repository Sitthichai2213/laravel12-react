import { useState } from "react";
import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";

export default function ShoppingCart() {

    // ==========================
    // Product Data
    // ==========================
    const products = [
        {
            id: 1,
            name: "Gaming Keyboard",
            price: 1590,
            category: "Gaming",
            image: "/images/keyboard.jpg"
        },
        {
            id: 2,
            name: "Wireless Mouse",
            price: 690,
            category: "Office",
            image: "/images/mouse.jpg"
        },
        {
            id: 3,
            name: "Gaming Monitor",
            price: 4990,
            category: "Gaming",
            image: "/images/monitor.jpg"
        },
        {
            id: 4,
            name: "Gaming Headset",
            price: 1290,
            category: "Gaming",
            image: "/images/headset.jpg"
        },
        {
            id: 5,
            name: "Webcam HD",
            price: 990,
            category: "Office",
            image: "/images/webcam.jpg"
        },
        {
            id: 6,
            name: "Mechanical Keyboard",
            price: 2590,
            category: "Gaming",
            image: "/images/mechanical.jpg"
        }
    ];

    // ==========================
    // State
    // ==========================

    const [cartItems, setCartItems] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // ==========================
    // Functions
    // ==========================

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const filteredProducts = products.filter((product) => {

        const matchSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "All" ||
            product.category === category;

        return matchSearch && matchCategory;

    });

    return (

        <BootstrapLayout>

            <Head title="TechZone Store" />

            <div
                style={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(135deg,#EEF6FF,#FFFFFF)"
                }}
            >

                {/* ================= NAVBAR ================= */}

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

                    <div className="container">

                        <a className="navbar-brand fw-bold fs-3">

                            🛒 TechZone

                        </a>

                        <div className="d-flex align-items-center">

                            <input
                                type="text"
                                className="form-control me-3"
                                placeholder="Search Product..."
                                style={{ width: 280 }}
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                            <button
                                className="btn btn-outline-light me-3"
                            >
                                Login
                            </button>

                            <button
                                className="btn btn-warning position-relative"
                            >

                                Cart

                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >

                                    {cartItems.length}

                                </span>

                            </button>

                        </div>

                    </div>

                </nav>

                {/* ================= HERO ================= */}

                <div className="container mt-5">

                    <div
                        className="row align-items-center shadow-lg rounded-4 p-5"
                        style={{
                            background:
                                "linear-gradient(135deg,#2563EB,#06B6D4)",
                            color: "white"
                        }}
                    >

                        <div className="col-lg-7">

                            <h1 className="display-3 fw-bold">

                                Summer Sale 🔥

                            </h1>

                            <p className="fs-4">

                                ลดสูงสุด 50%

                                สำหรับอุปกรณ์ Gaming

                            </p>

                            <button
                                className="btn btn-warning btn-lg mt-3 px-5"
                            >

                                Shop Now

                            </button>

                        </div>

                        <div className="col-lg-5 text-center">

                            <img
                                src="/images/banner.png"
                                className="img-fluid"
                                style={{
                                    maxHeight: "300px"
                                }}
                            />

                        </div>

                    </div>

                </div>

                {/* ================= CATEGORY ================= */}

                <div className="container mt-5">

                    <div className="d-flex gap-3">

                        <button
                            className={`btn ${
                                category==="All"
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                            }`}
                            onClick={() =>
                                setCategory("All")
                            }
                        >

                            All

                        </button>

                        <button
                            className={`btn ${
                                category==="Gaming"
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                            }`}
                            onClick={() =>
                                setCategory("Gaming")
                            }
                        >

                            Gaming

                        </button>

                        <button
                            className={`btn ${
                                category==="Office"
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                            }`}
                            onClick={() =>
                                setCategory("Office")
                            }
                        >

                            Office

                        </button>

                    </div>

{/* ===================== PRODUCT LIST ===================== */}

<div className="col-lg-8">

    <div className="row">

        {filteredProducts.map((product) => (

            <div
                className="col-md-6 col-xl-4 mb-4"
                key={product.id}
            >

                <div
                    className="card h-100 border-0 shadow-sm"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        transition: "0.3s"
                    }}
                    onMouseEnter={(e)=>{
                        e.currentTarget.style.transform="translateY(-8px)";
                        e.currentTarget.style.boxShadow="0 20px 40px rgba(0,0,0,.15)";
                    }}
                    onMouseLeave={(e)=>{
                        e.currentTarget.style.transform="translateY(0)";
                        e.currentTarget.style.boxShadow="";
                    }}
                >

                    <div className="position-relative">

                        <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.name}
                            style={{
                                height:"220px",
                                objectFit:"cover"
                            }}
                        />

                        <span
                            className="badge bg-danger position-absolute"
                            style={{
                                top:15,
                                left:15
                            }}
                        >
                            -20%
                        </span>

                        <span
                            className="badge bg-success position-absolute"
                            style={{
                                top:15,
                                right:15
                            }}
                        >
                            NEW
                        </span>

                    </div>

                    <div className="card-body d-flex flex-column">

                        <small className="text-primary fw-bold">

                            {product.category}

                        </small>

                        <h5 className="fw-bold mt-2">

                            {product.name}

                        </h5>

                        <div className="mb-2">

                            ⭐⭐⭐⭐⭐

                            <small className="text-muted ms-2">

                                (245 Reviews)

                            </small>

                        </div>

                        <div className="mb-3">

                            <span
                                className="fw-bold text-success fs-4"
                            >

                                ฿{product.price}

                            </span>

                            <del
                                className="text-muted ms-2"
                            >

                                ฿{Math.floor(product.price*1.2)}

                            </del>

                        </div>

                        <div className="mt-auto">

                            <button
                                className="btn btn-primary w-100"
                                onClick={()=>addToCart(product)}
                            >

                                🛒 Add To Cart

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        ))}

    </div>

</div>
{/* ===================== CART ===================== */}

<div className="col-lg-4">

    <div
        className="card border-0 shadow-lg"
        style={{
            borderRadius: "20px",
            position: "sticky",
            top: "20px"
        }}
    >

        <div className="card-body p-4">

            <div className="d-flex justify-content-between align-items-center">

                <h3 className="fw-bold mb-0">
                    My Cart
                </h3>

                <span className="badge bg-primary fs-6">
                    {cartItems.length}
                </span>

            </div>

            <hr />

            {cartItems.length === 0 ? (

                <div className="text-center py-5">

                    <h1 style={{fontSize:"60px"}}>🛒</h1>

                    <p className="text-muted">

                        Cart is Empty

                    </p>

                </div>

            ) : (

                cartItems.map((item,index)=>(

                    <div
                        key={index}
                        className="d-flex mb-3 pb-3 border-bottom"
                    >

                        <img
                            src={item.image}
                            style={{
                                width:"70px",
                                height:"70px",
                                objectFit:"cover",
                                borderRadius:"12px"
                            }}
                        />

                        <div className="ms-3 flex-grow-1">

                            <h6 className="mb-1">

                                {item.name}

                            </h6>

                            <small className="text-muted">

                                {item.category}

                            </small>

                            <div
                                className="fw-bold text-success"
                            >

                                ฿{item.price}

                            </div>

                        </div>

                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={()=>removeItem(index)}
                        >

                            ✕

                        </button>

                    </div>

                ))

            )}

            <hr />

            <div className="mb-3">

                <label className="form-label">

                    Coupon

                </label>

                <div className="input-group">

                    <input
                        className="form-control"
                        placeholder="SAVE20"
                    />

                    <button
                        className="btn btn-primary"
                    >

                        Apply

                    </button>

                </div>

            </div>

            <div className="d-flex justify-content-between mb-2">

                <span>

                    Subtotal

                </span>

                <strong>

                    ฿{totalPrice}

                </strong>

            </div>

            <div className="d-flex justify-content-between mb-2">

                <span>

                    Discount

                </span>

                <span className="text-danger">

                    -฿200

                </span>

            </div>

            <div className="d-flex justify-content-between mb-2">

                <span>

                    Shipping

                </span>

                <span className="text-success">

                    FREE

                </span>

            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">

                <h4>Total</h4>

                <h4 className="text-primary">

                    ฿{Math.max(totalPrice-200,0)}

                </h4>

            </div>

            <button
                className="btn btn-success w-100 mt-4 py-3 fw-bold"
            >

                💳 Checkout

            </button>

            <button
                className="btn btn-outline-danger w-100 mt-3"
                onClick={()=>setCartItems([])}
            >

                🗑 Clear Cart

            </button>

        </div>

    </div>

</div>

</div>

{/* ===================== FEATURES ===================== */}

<div className="container mt-5">

    <div className="row text-center">

        <div className="col-md-4">

            <div className="card border-0 shadow-sm p-4">

                <h1>🚚</h1>

                <h5>Free Shipping</h5>

                <p className="text-muted">

                    ฟรีค่าจัดส่งทั่วประเทศ

                </p>

            </div>

        </div>

        <div className="col-md-4">

            <div className="card border-0 shadow-sm p-4">

                <h1>🔒</h1>

                <h5>Secure Payment</h5>

                <p className="text-muted">

                    ชำระเงินปลอดภัย 100%

                </p>

            </div>

        </div>

        <div className="col-md-4">

            <div className="card border-0 shadow-sm p-4">

                <h1>⭐</h1>

                <h5>Best Quality</h5>

                <p className="text-muted">

                    รับประกันสินค้าของแท้

                </p>

            </div>

        </div>

    </div>

</div>
{/* ===================== NEWSLETTER ===================== */}

<div className="container mt-5">

    <div
        className="rounded-4 p-5 text-center text-white shadow-lg"
        style={{
            background: "linear-gradient(135deg,#2563EB,#7C3AED)"
        }}
    >

        <h2 className="fw-bold">
            📩 Subscribe to Our Newsletter
        </h2>

        <p className="mb-4">
            รับข่าวสาร โปรโมชั่น และส่วนลดก่อนใคร
        </p>

        <div className="row justify-content-center">

            <div className="col-md-6">

                <div className="input-group">

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                    />

                    <button className="btn btn-warning fw-bold">
                        Subscribe
                    </button>

                </div>

            </div>

        </div>

    </div>

</div>

{/* ===================== FOOTER ===================== */}

<footer
    className="bg-dark text-white mt-5 pt-5"
>

    <div className="container">

        <div className="row">

            <div className="col-lg-4 mb-4">

                <h3 className="fw-bold">
                    🛒 TechZone
                </h3>

                <p className="text-light">

                    ร้านจำหน่ายอุปกรณ์คอมพิวเตอร์และเกมมิ่งเกียร์
                    คุณภาพสูง พร้อมบริการหลังการขาย

                </p>

            </div>

            <div className="col-lg-2 mb-4">

                <h5>Shop</h5>

                <ul className="list-unstyled">

                    <li className="mb-2">Gaming</li>
                    <li className="mb-2">Office</li>
                    <li className="mb-2">Monitor</li>
                    <li className="mb-2">Accessories</li>

                </ul>

            </div>

            <div className="col-lg-3 mb-4">

                <h5>Customer Service</h5>

                <ul className="list-unstyled">

                    <li className="mb-2">Help Center</li>
                    <li className="mb-2">Shipping</li>
                    <li className="mb-2">Return Policy</li>
                    <li className="mb-2">Warranty</li>

                </ul>

            </div>

            <div className="col-lg-3 mb-4">

                <h5>Contact</h5>

                <p className="mb-2">
                    📍 Bangkok, Thailand
                </p>

                <p className="mb-2">
                    📞 02-123-4567
                </p>

                <p className="mb-3">
                    ✉ techzone@email.com
                </p>

                <div className="d-flex gap-3 fs-4">

                    <span>📘</span>
                    <span>📸</span>
                    <span>🎵</span>
                    <span>▶</span>

                </div>

            </div>

        </div>

        <hr className="border-secondary"/>

        <div className="d-flex justify-content-between pb-3">

            <span>
                © 2026 TechZone Store
            </span>

            <span>
                Built with React + Inertia + Bootstrap
            </span>

        </div>

    </div>

</footer>

</div>

</BootstrapLayout>

);

}