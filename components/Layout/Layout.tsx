import React from "react"
import { Header } from "../Header/Header";

export interface LayoutProps {
	children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {

	return <div>
		<Header />
		{props.children}
	</div>

}