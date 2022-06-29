import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { GlobalProps } from "../features/GlobalProps/GlobalProps";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
	return <div style={{ padding: "8rem" }}>


		<h1>Products</h1>

		<ul>
			{
				props.products.map(p => <li key={p.id}>
					<Link href={`/products/${encodeURIComponent(p.slug)}`}>
						<a>
							<h2>{p.name}</h2>
						</a>
					</Link>
				</li>)
			}
		</ul>

	</div>
}

export const getStaticProps = GlobalProps.getEmptyStaticProps;