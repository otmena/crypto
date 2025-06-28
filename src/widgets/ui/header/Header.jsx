import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../../public/assets/images/logo.png";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.nav__container}>
				<img className={styles.logo} src={logo} alt='' />
				<div className={styles.nav__links}>
					<a href='https://t.me/s4rety'>X</a>
					<a href='https://t.me/s4rety'>Telegram</a>
					<a href='https://t.me/s4rety'>Chart</a>
				</div>
				<button className={styles.nav__button}>BUY NOW</button>
			</div>
		</header>
	);
}
