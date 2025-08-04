import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
			<div className="container">
				<Link to="/">
					<button className="btn btn-dark btn-rounded" style={{ backgroundColor: '#5a277c' }}>Home</button>
				</Link>
				<div className="ml-auto d-flex gap-2">
					<Link to="/signup">
						<button className="btn btn-outline-primary">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};