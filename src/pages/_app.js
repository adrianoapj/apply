import { IntlProvider } from 'react-intl'
import getUserLocale from 'get-user-locale'

const MyApp = ({ Component, pageProps }) => {
  return (
    <IntlProvider locale={getUserLocale()}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
