import { Link } from "@reach/router";
import { useContext } from "react";
import SliderContext from "../contexts/SliderContext";
import "./PlaylistSliderItem.scss";

export default function PlaylistSliderItem({image, name, id}) {
	// eslint-disable-next-line
	var [slider, setSlider] = useContext(SliderContext);

	return (
		<Link to={`/playlists/${id}`} className="sliderItem" onClick={()=>setSlider({title: name})}>
			<img src={image} alt={name} className="sliderItem__image" />
		</Link>
	);
}
