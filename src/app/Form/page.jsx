"use client";
import { useState } from "react";

export default function FormPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({}); // <-- yaha se types hata diya

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.username) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Form submitted!\nUsername: ${form.username}\nPassword: ${form.password}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login Form</h2>

        {/* Username */}
<div>
  <input
    type="text"
    name="username"
    placeholder="Enter Username"
    value={form.username}
    onChange={handleChange}
    className="w-full border p-2 rounded"
  />
  {/\d/.test(form.username) && (
    <p className="text-red-500 text-sm">Numbers are not allowed</p>
  )}
  {errors.username && (
    <p className="text-red-500 text-sm">{errors.username}</p>
  )}
</div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-2 top-2 text-sm text-gray-600"
          >
            {showPass ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
