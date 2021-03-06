import { theme, extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'menlo, monospace'
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px'
    },
    fontSizes: {
        ...theme.fontSizes
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#8257e5'
        },
        gray: {
            ...theme.colors.gray,
            300: '#e1e1e6',
            600: '#29292e',
            700: '#202024',
            800: '#121214',  
        }
    }
}

const defaultTheme = extendTheme({ config })

export default defaultTheme