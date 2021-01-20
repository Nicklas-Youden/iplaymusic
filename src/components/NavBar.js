import "./NavBar.scss";

export default function NavBar({children}) {
	return (
		<nav className="navbar">
			<i className="icon-left-open" onClick={window.history.back()}></i>
			{children}
			<i className="icon-search"></i>
		</nav>
	)
}
