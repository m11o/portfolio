import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const fontConfig = {
  fonts: {
    header: 'Dancing Script',
    body: 'Roboto, Kosugi Maru, Arial, sans-serif',
    heading: 'Roboto, Kosugi Maru, Arial, sans-serif',
    mono: 'Roboto, Kosugi Maru, Arial, sans-serif'
  }
}

const theme = extendTheme({ config, ...fontConfig })
export default theme
