
//Import necessário para gerar um Head de forma mais abstraida no App
import { ColorModeScript } from '@chakra-ui/color-mode'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import themeDefault from '../styles/theme'

//Todas as importações de Head deve ser colocada aqui dentro
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <ColorModeScript initialColorMode={themeDefault.config.initialColorMode} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}