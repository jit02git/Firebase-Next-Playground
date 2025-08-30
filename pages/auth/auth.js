import { useState } from "react";
import { registerWithEmail, loginWithEmail } from "../../services/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithEmail(email, password);
      // Optionally redirect or show success
    } catch (err) {
      setError(err.message || "Login failed");
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      await registerWithEmail(email, password);
      // Optionally redirect or show success
    } catch (err) {
      setError(err.message || "Signup failed");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Login / Signup</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
