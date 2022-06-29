import { GetStaticProps, InferGetStaticPropsType } from 'next';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
	return (
		<div style={{ padding: "8rem" }}>
			<h1>WithStaticProps</h1>
			<p>Example value = {props.exampleValue}</p>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {
			exampleValue: 1,
		}
	}
}
