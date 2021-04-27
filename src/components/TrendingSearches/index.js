import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
	() => import('./TrendingSearches') //Cuando el import es tipo funcion es asincrono y devuelve una promesa
)

export default function LazyTrending() {
	const { isNearScreen, fromRef } = useNearScreen({ distance: '75px' })

	//con la propiedad ref indico al elemento en que variable debe guardar su referencia
	return (
		<div ref={fromRef}>
			<Suspense fallback={null}>
				{isNearScreen ? <TrendingSearches /> : null}
			</Suspense>
		</div>
	)
}
