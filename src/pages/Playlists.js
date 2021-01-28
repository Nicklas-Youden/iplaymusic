import NavBar from "../components/NavBar";
import Drawer from "../components/Drawer";
import Page from "../components/Page";
import PageHeading from "../components/PageHeading";

export default function Playlists() {
	return (
		<>
			<NavBar transparent bgImg="./images/sound-wave.png">Playlists</NavBar>
			<Page>
				<PageHeading>Playlists</PageHeading>

			</Page>
			<Drawer />
		</>
	);
}