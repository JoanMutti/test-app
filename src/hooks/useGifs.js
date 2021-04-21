import { useContext, useEffect, useState } from 'react'
import getGifts from '../services/getGifts'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const { gifs, setGifs } = useContext(GifsContext)

	useEffect(
		function () {
			setLoading(true)

			const keywordToUse =
				keyword || localStorage.getItem('lastKeyword') || 'random'

			getGifts({ keyword: keywordToUse }).then((gifs) => {
				setGifs(gifs)
				setLoading(false)
				localStorage.setItem('lastKeyword', keywordToUse)
			})
		},
		[keyword, setGifs]
	)
	return { loading, gifs }
}
