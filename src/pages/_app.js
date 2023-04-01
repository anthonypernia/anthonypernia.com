import ContextPage from "@context/ContextPage"

function AnthonyApp({ Component, pageProps }) {
  return(
    <>
    <ContextPage>
      <Component {...pageProps} />
    </ContextPage>
    </>
  )
}

export default AnthonyApp