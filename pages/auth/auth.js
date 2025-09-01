import { useState } from "react";
import { registerWithEmail, loginWithEmail } from "@/services/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      setLoading(false);
      return;
    }

    try {
      await loginWithEmail(email, password);
      // redirect or show success
    } catch (err) {
      setError(err.message || "Login failed");
    }

    setLoading(false);
  };

  const handleSignup = async () => {
  console.log("Email:", email, "Password:", password); // <-- important
  try {
    const user = await registerWithEmail(email, password);
    console.log("Registered user:", user);
  } catch (err) {
    console.error("Signup failed:", err);
  }
};


  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Login / Signup</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <button
        onClick={handleSignup}
        className="bg-green-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Signup"}
      </button>
    </div>
  );
}
