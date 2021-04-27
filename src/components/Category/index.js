import { Link } from 'wouter'

export default function Category(props) {
	return (
		<ul>
			{props.popularGifs.map((popularGif) => (
				<li key={popularGif}>
					<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
				</li>
			))}
		</ul>
	)
}
