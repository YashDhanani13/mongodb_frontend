import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initial empty state
  const initialForm = {
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    rating: "",
  };
  const [form, setForm] = useState(initialForm);

  // ✅ FIX #1: Correct port number
  const API_URL = "http://localhost:3000/api/products";

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(API_URL);

      // ✅ FIX #2: Access the products array from response
      setProducts(res.data.products || []);

    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Create new product
  const createProduct = async () => {
    // ✅ FIX #3: Add validation
    if (!form.name || !form.price || !form.category || !form.description) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // ✅ FIX #4: Send proper data format
      await axios.post(API_URL, {
        name: form.name,
        price: Number(form.price),
        category: form.category,
        description: form.description,
        image: form.image || "https://via.placeholder.com/150",
        rating: Number(form.rating) || 0,
      });

      fetchProducts(); // Refresh list
      setForm(initialForm); // Clear the form
      alert("Product created successfully!");

    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product");
      alert("Error: " + (error.response?.data?.message || "Failed to create product"));
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
      alert("Product deleted successfully!");

    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product");
      alert("Error: Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-page" style={{ padding: "20px", display: "flex", gap: "20px" }}>

      {/* Error Display */}
      {error && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "#ff4444",
          color: "white",
          padding: "15px",
          borderRadius: "8px",
          zIndex: 1000
        }}>
          {error}
        </div>
      )}

      {/* LEFT SIDE PRODUCT FORM */}
      <div className="left-form" style={{ width: "30%", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", height: "fit-content" }}>
        <h3>+ Add New Product</h3>

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Product Name *</label>
        <input
          type="text"
          placeholder="e.g. Mechanical Keyboard"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          disabled={loading}
          style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />

        <div className="row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div>
            <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Price ($) *</label>
            <input
              type="number"
              placeholder="0.00"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              disabled={loading}
              style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Category *</label>
            <input
              type="text"
              placeholder="e.g. Tech"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              disabled={loading}
              style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>
        </div>

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Description *</label>
        <textarea
          placeholder="Brief description..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          disabled={loading}
          rows="4"
          style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Image URL</label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          disabled={loading}
          style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>Rating (0-5)</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          placeholder="4.5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          disabled={loading}
          style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />

        <button
          onClick={createProduct}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: loading ? "#ccc" : "black",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </div>

      {/* RIGHT SIDE PRODUCT CARDS */}
      <div className="right-list" style={{ flex: 1 }}>
        <h2>Inventory Items ({products.length})</h2>

        {loading && <p>Loading...</p>}

        {!loading && products.length === 0 && (
          <p style={{ color: "#666", textAlign: "center", marginTop: "50px" }}>
            No products yet. Create your first product!
          </p>
        )}

        <div className="card-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {products.map((p) => (
            <div
              className="product-card"
              key={p._id}
              style={{
                border: "1px solid #eee",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >

              {/* Image Display */}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "10px"
                  }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              )}

              <div className="card-top" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <span
                  className="badge"
                  style={{
                    background: "#eef2ff",
                    color: "#4f46e5",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}
                >
                  {p.category}
                </span>
                <span className="price" style={{ fontWeight: "bold", fontSize: "18px", color: "#16a34a" }}>
                  ${Number(p.price).toFixed(2)}
                </span>
              </div>

              <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#111" }}>{p.name}</h3>
              <p style={{ fontSize: "14px", color: "#666", minHeight: "40px" }}>{p.description}</p>

              <div style={{ marginTop: "10px", color: "#fbbf24", fontSize: "14px" }}>
                ⭐ {Number(p.rating).toFixed(1)} / 5
              </div>

              <div className="card-actions" style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
                <button
                  className="promote-btn"
                  style={{
                    border: "1px solid #a855f7",
                    background: "transparent",
                    color: "#a855f7",
                    cursor: "pointer",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  ✨ Promote
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(p._id)}
                  disabled={loading}
                  style={{
                    color: "#ef4444",
                    background: "transparent",
                    border: "1px solid #ef4444",
                    cursor: loading ? "not-allowed" : "pointer",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontSize: "16px"
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Products;