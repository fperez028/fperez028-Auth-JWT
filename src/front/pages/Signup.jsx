import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [errorType, setErrorType] = useState(null); // "error" or "info"

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrorType(null);

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setErrorType("error");
      return;
    }

    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!resp.ok) {
        const error = await resp.json();
        throw new Error(error.msg || "Signup failed");
      }

      await resp.json();
      setMessage("Signup successful!");
      setErrorType("info");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage(error.message);
      setErrorType("error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Signup</h2>
      {message && (
        <div className={`alert ${errorType === "error" ? "alert-danger" : "alert-info"}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
};
