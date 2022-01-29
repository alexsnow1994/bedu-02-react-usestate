// ./src/components/Home/index.js

import React, { useState } from 'react';

export default function Home() {

	const [data, setData] = useState({
		title: "",
		description: ""
	})

	const [comments, setComments ] = useState([])

	const [error, setError] = useState("")


	const handleChange = (event) => {

		
		setData({
			...data,
			[event.target.name]: event.target.value
		})

	}

	const handleSubmit = (event) => {

		
		event.preventDefault()
		

		
		if(!data.title || !data.description ){

			return setError("Tienes campos vacíos.")

		}


		
		setComments([
			...comments,
			data			
		])

		
		setData({
			title: "",
			description: ""
		})

		return setError("")

	}


  return (
	  <>
	  	<h1>Sección de comentarios</h1>
		
		<form onSubmit={ (evt) => { handleSubmit(evt) } }>
			<label>Título</label>
			<input 
				name="title"
				value={data.title}
				onChange={ (evt) => { handleChange(evt) } }
			/>

			<label>Descripción</label>
			<input 
				name="description"
				value={data.description}
				onChange={ (evt) => { handleChange(evt) } }
			/>

			<button type="submit">Enviar datos</button>

		</form>

		{ error ? error : null }

		<h2>Listado de comentarios</h2>

		<ul>
			{
				comments.map((e, index) => {
					return (
						<li key={index}>
							<h3>{e.title}</h3>
							<p>{e.description}</p>
						</li>
					)
				})
			}
		</ul>

	  </>
  )
}