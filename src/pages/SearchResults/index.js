import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'

export default function SearchResults({ params }) {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })

	const handleNextPage = () => setPage((currentPage) => currentPage + 1)

	return (
		<>
			{loading ? (
				<h3>Cargando...</h3>
			) : (
				<ListOfGifs name={decodeURI(keyword)} gifs={gifs} />
			)}
			<br />
			<button onClick={handleNextPage}>Get next page</button>
		</>
	)
}
