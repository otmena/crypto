import cl from "./About.module.scss";
import Button from "../../shared/ui/button/Button";
import ParticlesComponent from "../particles";

export default function About() {
	return (
		<div className={cl.about}>
			<ParticlesComponent style={{ position: "absolute", zIndex: "0" }} id='particles' />

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
