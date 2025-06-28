import React from "react";
import cl from "./Button.module.scss";

export default function Button({ children }) {
	return <button className={cl.button}>{children}</button>;
}
