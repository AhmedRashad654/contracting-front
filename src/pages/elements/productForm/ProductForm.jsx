import React, { useState } from "react";
// import { createProduct, updateProduct } from '../api/productsApi';

const ProductForm = ({ product, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(
        product || {
            sku: "",
            name: "",
            uom: "",
            category: "",
            price: "",
            quantity: "",
            description: "",
            supplier: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.category || !formData.price) {
            alert("Please fill in all required fields.");
            return;
        }
        onSubmit({ ...formData, price: parseFloat(formData.price) });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form} className="slide-in">
            <h2 style={styles.heading}>
                {product ? "Edit Product" : "Add Product"}
            </h2>
            <div style={styles.formGroup}>
                <label>SKU:</label>
                <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>UOM:</label>
                <input
                    type="text"
                    name="uom"
                    value={formData.uom}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category?._id}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Quantity:</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Supplier:</label>
                <input
                    type="text"
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.formGroup}>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={styles.textarea}
                ></textarea>
            </div>
            <div style={styles.buttonGroup}>
                <button type="submit" style={styles.submitButton}>
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    style={styles.cancelButton}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        animation: "slideIn 0.5s ease-in-out",
    },
    heading: {
        marginBottom: "10px",
        color: "#333",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    },
    input: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    textarea: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        resize: "none",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
    },
    submitButton: {
        background: "#28a745",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    cancelButton: {
        background: "#6c757d",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default ProductForm;
