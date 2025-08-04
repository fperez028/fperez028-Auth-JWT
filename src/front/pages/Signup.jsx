import { useState } from "react";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage(null);
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

            const data = await resp.json();
            setMessage("Signup successful!");
            setEmail("");
            setPassword("");

        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Signup</h2>
            {message && <div className="alert alert-info">{message}</div>}
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
                <button type="submit" className="btn btn-success">Sign Up</button>
            </form>
        </div>
    );
};
