import { useContext, useEffect, useState } from 'react'
import getGifts from 'services/getGifts'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const [loadingNextPage, setLoadingNextPage] = useState(false)
	const [page, setPage] = useState(INITIAL_PAGE)
	const { gifs, setGifs } = useContext(GifsContext)

	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

	useEffect(
		function () {
			setLoading(true)

			getGifts({ keyword: keywordToUse }).then((gifs) => {
				setGifs(gifs)
				setLoading(false)
				localStorage.setItem('lastKeyword', keywordToUse)
			})
		},
		[keyword, keywordToUse, setGifs]
	)

	useEffect(() => {
		if (page === INITIAL_PAGE) return
		setLoadingNextPage(true)
		getGifts({ keyword: keywordToUse, page }).then((nextGifs) => {
			setGifs((prevGifs) => prevGifs.concat(nextGifs))
			setLoadingNextPage(false)
		})
	}, [page])

	return { loading, loadingNextPage, gifs, setPage }
}
