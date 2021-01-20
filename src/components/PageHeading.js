import "./PageHeading.scss";

export default function PageHeading({children, dark, light}) {
	return <h1 className="pageHeading">{children}</h1>
}