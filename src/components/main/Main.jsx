import React from "react";
import cl from "./Main.module.scss";

export default function Main() {
	return (
		<div className={cl.main}>
			<div>
				<h1 className={cl.title}>
					Discover <span style={{ color: "#e2632c" }}>aidog</span>
				</h1>
				<p className={cl.subtitle}>
					Imagine a crypto that blends the viral charm of Doge with the unstoppable
					<br /> power of AI—that’s <span style={{ color: "#e2632c" }}>$AIDOG!</span> This coin
					isn’t just another meme token; it’s a playful yet ambitious <br /> project riding the AI
					revolution with a furry twist.
				</p>
				<div className={cl.out}>
					<div className={cl.in}>
						{" "}
						<span style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
							Token Address
						</span>
						<div className={cl.form}>
							<input
								className={cl.input}
								type='text'
								disabled
								placeholder='Efremov Miron Olegovich'
							/>
							<button className={cl.form__button}>COPY</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
