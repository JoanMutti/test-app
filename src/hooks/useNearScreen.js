import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
	const [isNearScreen, setShow] = useState(false) //Use state renderiza el componente cuando cambia

	const fromRef = useRef() //funciona como baul, guarda valores que entre renderizados queda inalterado
	//useRef no renderiza el componente nuevamente cuando cambia su valor

	useEffect(function () {
		let observer

		const onChange = (entries, observer) => {
			const el = entries[0]
			console.log(el.isIntersecting)
			if (el.isIntersecting) {
				setShow(true)
				observer.disconnect()
			}
		}

		//polyfill observer
		Promise.resolve(
			typeof IntersectionObserver != 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				//intersection observer = permite determinar si un elemento esta en el viewport
				rootMargin: distance,
			})

			observer.observe(fromRef.current)
		})

		return () => observer && observer.disconnect()
	})

	return { isNearScreen, fromRef }
}
