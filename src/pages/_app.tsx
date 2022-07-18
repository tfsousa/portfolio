import { AppProps } from 'next/app'
import { Suspense } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Suspense fallback={'...loading'}>
			<Component {...pageProps} />
		</Suspense>
	)
}

export default App
