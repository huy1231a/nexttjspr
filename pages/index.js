import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import About from './about'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Landing Page</title>
			</Head>
			<div className="container">
				<header>
					<p><a href="#">The New Gym coLtd</a></p>
					<ul>
						<li><Link href="/about">About</Link></li>
						<li><a href="#" > <FontAwesomeIcon icon={["fal", "coffee"]} /> Features</a></li>
						<li><a href="#">Use Case</a></li>
						<li><a href="#">Pricing</a></li>

					</ul>
					<FontAwesomeIcon className="bar" icon={faBars}></FontAwesomeIcon>
				</header>
				<div className="contenido">
					<div className="info">
						<h1>Beautiful <br /> Landing Page</h1>

						<p>
							We built this template to help you create <br />
							modern and Beautiful marketing page.
						</p>
						<div className="btn">
							<button className="btn-1">Get it now</button>
							<button>Features</button>
						</div>

					</div>
					<div className="img-container">
						<img src="https://cafefcdn.com/thumb_w/650/pr/2021/1612424872195-77-0-1326-2000-crop-1612424885365-63748115770595.jpg" alt="pizza" />
					</div>


				</div>
			</div>

		</React.Fragment>
	)
}
