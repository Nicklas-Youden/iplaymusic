import Drawer from "../components/Drawer";
import FeaturedCard from "../components/FeaturedCard";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import PageHeading from "../components/PageHeading";

export default function Featured() {
	return (
		<>
		<NavBar>Featured</NavBar>
		<Page>
			<PageHeading>Featured</PageHeading>
			<FeaturedCard image="https://picsum.photos/id/200/350/370" album="The Greatest Showman" genre="Soundtrack" />
			<FeaturedCard image="https://picsum.photos/id/250/350/370" album="Black" genre="Rock" />
			<FeaturedCard image="https://picsum.photos/id/301/350/370" album="Live At Wembley" genre="Rock" />
			<FeaturedCard image="https://picsum.photos/id/401/350/370" album="The Greatest Showman" genre="Soundtrack" />
			<FeaturedCard image="https://picsum.photos/id/501/350/370" album="The Greatest Showman" genre="Soundtrack" />
		</Page>
		<Drawer />
		</>
	)
}