import type { AppProps } from 'next/app'
import { GlobalPropsContextProvider } from '../features/GlobalProps/contexts/GlobalPropsContext'
import { GlobalProps } from '../features/GlobalProps/GlobalProps'
import { Layout } from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return <GlobalPropsContextProvider globalProps={GlobalProps.extract(pageProps)}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</GlobalPropsContextProvider>
}

export default MyApp