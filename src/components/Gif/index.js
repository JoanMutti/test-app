import { Link } from 'wouter'
import '../ListOfGifs/styles.css'

export default function Gif({ title, id, url }) {
	return (
		<Link to={`/gif/${id}`}>
			<img loading='lazy' src={url} alt={title} className='ListOfGifs-item' />
		</Link>
	)
}
