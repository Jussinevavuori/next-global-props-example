import Link from "next/link";
import { GlobalProps } from "../../features/GlobalProps/GlobalProps";

export function Header() {
	const { products } = GlobalProps.use();

	return <header>
		<nav style={{ padding: "2rem 8rem", background: "#eee", display: "flex", gap: "2rem" }}>
			<Link href="/">
				<a>
					Home
				</a>
			</Link>
			<Link href="/products">
				<a>
					Products ({products.length})
				</a>
			</Link>
		</nav>
	</header>
}