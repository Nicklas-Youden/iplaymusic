import NavBar from "../components/NavBar";
import Drawer from "../components/Drawer";
import Page from "../components/Page";
import PageHeading from "../components/PageHeading";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import axios from "axios";
import Track from "../components/Track";
import PlaylistSlider from "../components/PlaylistSlider";

export default function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});

	useEffect(function() {
		if (props.id)
		axios.get("https://api.spotify.com/v1/playlists/" + props.id + "/tracks", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
			.then(response => setTracks(response.data));
	}, [token, props.id, setTracks]);

	return (
		<>
			<NavBar transparent bgImg="./images/sound-wave.png">Playlists</NavBar>
			<Page>
				<PageHeading>Playlists</PageHeading>
				<PlaylistSlider />

				<ul className="trackList">
					{tracks.items?.map(({track})=><Track key={track.id} id={track.id} artist={track.artists[0].name} title={track.name} duration={track.duration_ms}/>)}
				</ul>

			</Page>
			<Drawer />
		</>
	);
}
