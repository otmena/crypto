import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import cl from "./About.module.scss";
import Button from "../../shared/ui/button/Button";

export default function About() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<div className={cl.about}>
			{/* Частицы — фоновый canvas */}
			<Particles
				id='tsparticles'
				init={particlesInit}
				options={{
					fullScreen: { enable: false },
					particles: {
						number: {
							value: 80,
							density: {
								enable: true,
								area: 800,
							},
						},
						color: {
							value: "#ffffff",
						},
						shape: {
							type: "circle",
						},
						opacity: {
							value: 0.5,
							random: true,
						},
						size: {
							value: 3,
							random: true,
						},
						links: {
							enable: true,
							distance: 150,
							color: "#ffffff",
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 2,
							direction: "none",
							random: true,
							straight: false,
							outModes: {
								default: "out",
							},
						},
					},
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: "repulse",
							},
							onClick: {
								enable: true,
								mode: "push",
							},
						},
						modes: {
							repulse: {
								distance: 100,
								duration: 0.4,
							},
							push: {
								quantity: 4,
							},
						},
					},
					detectRetina: true,
				}}
				style={{
					position: "absolute",
					inset: 0,
					zIndex: -1,
				}}
			/>

			{/* Контент сверху */}
			<div className={cl.content}>
				<h1 className={cl.title}>
					Hold <span className={cl.name}>$AIDOG</span> <br /> with us
				</h1>
				<p className={cl.subtitle}>
					Experience the distinctive atmosphere that surrounds and emanates <br />
					from those who hold the power of $aura.
				</p>
				<div className={cl.about__buttons}>
					<Button className={cl.about__button}>BUY $AIDOG</Button>
					<Button className={cl.about__button}>ROT EBAL</Button>
				</div>
				<button className={cl.scroll__button}>down</button>
			</div>
		</div>
	);
}
