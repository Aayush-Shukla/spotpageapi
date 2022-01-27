import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return  (
    <ChakraProvider>
  <Head>
      <title>@ayushittin.me</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  
  <Component {...pageProps} />
  
  </ChakraProvider>
  )
}
