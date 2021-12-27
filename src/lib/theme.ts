import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
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
      },
      '.resume-content': {
        '@media screen and (max-width: 48em)': {
          table: {
            thead: {
              display: 'none',
            },
            tbody: {
              tr: {
                display: 'flex',
                'flex-direction': 'column',

                td: {
                  padding: 2
                }
              }
            }
          }
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
    mono: '"Roboto Mono", "Kosugi Maru", Arial, sans-serif'
  }
}

const theme = extendTheme({ config, ...fontConfig, ...styleConfig })
export default theme
