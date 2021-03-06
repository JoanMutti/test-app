import { useEffect, useState } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'

export default function TrendingSearches() {
	const [trends, setTrends] = useState([])

	useEffect(function () {
		getTrendingTerms().then((trends) => setTrends(trends))
	}, [])

	return <Category popularGifs={trends} />
}
