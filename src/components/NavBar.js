import "./NavBar.scss";
import PageHeading from "./PageHeading";

export default function NavBar({children, transparent, bgImg}) {
	return (
		<div>
			<nav className={`navbar ${transparent ? "navbar--transparent" : "navbar--solid"}`}>
				{/* bgImg && <img src={bgImg} alt="" className="navbar__bgImg" /> */}
				<button onClick={() => window.history.back()} className="navbar__button">
					<i className="icon-left-open"></i>
				</button>
				{children}
				<i className="icon-search"></i>
			</nav>
			<PageHeading></PageHeading>
		</div>
	)
}
