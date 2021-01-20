import "./FeaturedCard.scss";

export default function FeaturedCard({ image, album, genre }) {
	return (
		<article className="featuredCard">
			<img src={image} className="featuredCard__image" alt={album} />
			<div className="featuredCard__text">
				<p className="featuredCard__album">{album}</p>
				<p className="featuredCard__genre">{genre}</p>
			</div>
		</article>
	);
}
