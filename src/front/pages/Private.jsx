import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      // Redirect to login if no token found
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Private Page</h2>
      <p>You are logged in and viewing the private page.</p>
    </div>
  );
};
