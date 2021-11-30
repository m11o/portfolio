import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const fontConfig = {
  fonts: {
    header: 'Dancing Script',
    body: 'M PLUS Rounded 1c, Kosugi Maru, Roboto, Arial, sans-serif',
    heading: 'M PLUS Rounded 1c, Kosugi Maru, Roboto, Arial, sans-serif',
    mono: 'Roboto, Kosugi Maru, Arial, sans-serif'
  }
}

const theme = extendTheme({ config, ...fontConfig })
export default theme
