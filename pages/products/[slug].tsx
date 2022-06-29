import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { GlobalProps } from "../../features/GlobalProps/GlobalProps";
import { productsApi } from "../../lib/api/productsApi";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
	return <div style={{ padding: "8rem" }}>
		<h1>{props.product.name}</h1>
		<p>{props.product.price} $</p>
	</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await productsApi.getAll()
	return {
		paths: products.map(p => ({ params: { slug: p.slug } })),
		fallback: false,
	}
}

export const getStaticProps = GlobalProps.getStaticProps<{ product: Product }>(
	async (ctx, globalProps) => {
		const slug = (ctx.params?.["slug"] ?? "").toString()
		const product = globalProps.products.find(_ => _.slug === slug)

		if (!product) return { notFound: true }

		return { props: { product } }
	}
)