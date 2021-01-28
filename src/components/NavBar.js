import "./NavBar.scss";

export default function NavBar({children, transparent, bgImg}) {
	return (
		<nav className={`navbar ${transparent ? "navbar--transparent" : "navbar--solid"}`}>
			{bgImg && <img src={bgImg} alt="" className="navbar__bgImg" />}
			<button onClick={() => window.history.back()} className="navbar__button">
				<i className="icon-left-open"></i>
			</button>
			{children}
			<i className="icon-search"></i>
		</nav>
	)
}
