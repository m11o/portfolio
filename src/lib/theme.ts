import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const styleConfig = {
  styles: {
    global: {
      '.resume-pdf-content': {
        bg: 'white',
        color: 'gray.800',
        p: 5,

        'td, th': {
          borderBottom: '1px #555 solid'
        }
      }
    }
  }
}

const fontConfig = {
  fonts: {
    header: 'Dancing Script',
    body: '"M PLUS Rounded 1c", "Kosugi Maru", Roboto, Arial, sans-serif',
    heading: '"M PLUS Rounded 1c", "Kosugi Maru", Roboto, Arial, sans-serif',
    mono: 'Roboto, Kosugi Maru, Arial, sans-serif'
  }
}

const theme = extendTheme({ config, ...fontConfig, ...styleConfig })
export default theme
