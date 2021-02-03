import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import PlaylistSliderItem from "./PlaylistSliderItem";
import SliderContext from "../contexts/SliderContext";

export default function PlaylistSlider() {
	var [token] = useContext(TokenContext);
	var sliderState = useState({});
	var [playlists, setPlaylists] = useState([]);

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/me/playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
			.then(response => setPlaylists(response.data.items));
	}, [token, setPlaylists]);

	return (
		<SliderContext.Provider value={sliderState}>
			<div>
				{playlists.map(list=><PlaylistSliderItem image={list.images[0].url} name={list.name} id={list.id} />)}
			</div>
			<p>{sliderState[0]?.title}</p>
		</SliderContext.Provider>
	)
}
