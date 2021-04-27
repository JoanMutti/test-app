import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'

export default function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()

	const { loading, gifs } = useGifs()

	const handleSubmit = (evt) => {
		evt.preventDefault()
		//navegar a otra ruta
		pushLocation(`/search/${keyword}`)
		console.log(keyword)
	}

	const handleChange = (evt) => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				<input type='text' value={keyword} placeholder='Search a gif here ...' />
			</form>

			<ListOfGifs gifs={gifs} name='Ultima busqueda' />
			<TrendingSearches />
		</>
	)
}
