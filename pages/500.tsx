import type { InferGetStaticPropsType } from 'next'
import { GlobalProps } from '../features/GlobalProps/GlobalProps';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
	return (
		<div style={{ padding: "8rem" }}>

			<h1>500 server error</h1>

		</div>
	)
}

export const getStaticProps = GlobalProps.getEmptyStaticProps