import { GlobalProps } from '../features/GlobalProps/GlobalProps';

export default function Page() {
	return (
		<div style={{ padding: "8rem" }}>
			<h1>Home</h1>
		</div>
	)
}

export const getStaticProps = GlobalProps.getEmptyStaticProps
