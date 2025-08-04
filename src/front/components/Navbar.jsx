import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container d-flex justify-content-between align-items-center">
        {token ? (
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link to="/">
            <button className="btn btn-dark btn-rounded" style={{ backgroundColor: '#5a277c' }}>
              Home
            </button>
          </Link>
        )}

        {!token && (
          <div>
            <Link to="/login">
              <button className="btn btn-outline-success me-2">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-primary">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
