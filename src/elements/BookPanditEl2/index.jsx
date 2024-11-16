"use client";

import React, { useState } from "react";

const BookPanditEl = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    address: "",
    state: "",
    pincode: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example POST request to the backend
      const response = await fetch("/api/book-pandit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Successful!");
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          address: "",
          state: "",
          pincode: "",
          message: "",
        });
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Book a Pandit
        </h2>

        {[
          { id: "name", label: "Name", type: "text", pattern: null },
          { id: "email", label: "Email", type: "email", pattern: null },
          { id: "contactNo", label: "Contact No.", type: "tel", pattern: "[0-9]{10}" },
          { id: "address", label: "Address", type: "text", pattern: null },
          { id: "state", label: "State", type: "text", pattern: null },
          { id: "pincode", label: "Pincode", type: "text", pattern: "[0-9]{6}" },
        ].map((field) => (
          <div key={field.id} className="flex flex-col space-y-1">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              pattern={field.pattern || undefined}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Message Field */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-200"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookPanditEl;
