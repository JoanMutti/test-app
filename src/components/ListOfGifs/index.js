import React from 'react'
import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs(params) {
	return (
		<>
			<h3 className='App-title'>{params.name}</h3>
			<div className='ListOfGifs'>
				{params.gifs.map(({ id, title, url }) => (
					<Gif key={id} title={title} url={url} id={id} />
				))}
			</div>
		</>
	)
}
