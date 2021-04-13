import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifts from "../services/getGifts";
import "./Gif.css";

export default function ListOfGifs({ params }) {
	const { keyword } = params;
	const [loading, setLoading] = useState(false);
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		setLoading(true);
		getGifts({ keyword }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
		});
	}, [keyword]);

	if (loading) return <p>Cargando...</p>;

	return (
		<>
			{gifs.map(({ id, title, url }) => (
				<Gif key={id} title={title} url={url} id={id} />
			))}
		</>
	);
}
